// src/hooks/useCheckoutForm.js
import { useState } from 'react';

const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  numeroTarjeta: /^(\d{4}\s?){4}$/,
  fechaExpiracion: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
  cvv: /^\d{3,4}$/,
  codigoPostal: /^\d{5}(-\d{4})?$/
};

const ERROR_MESSAGES = {
  required: 'Este campo es requerido',
  email: 'Email inválido',
  numeroTarjeta: 'Número de tarjeta inválido',
  fechaExpiracion: 'Fecha inválida (MM/AA)',
  cvv: 'CVV inválido (3 o 4 dígitos)',
  codigoPostal: 'Código postal inválido',
  nombre: 'Ingresa tu nombre completo',
  direccion: 'Ingresa una dirección válida',
  ciudad: 'Ingresa una ciudad válida'
};

export const useCheckoutForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  // Formatear valores de campos específicos
  const formatValue = (name, value) => {
    switch (name) {
      case 'numeroTarjeta':
        // Formato: XXXX XXXX XXXX XXXX
        return value
          .replace(/\s/g, '')
          .replace(/\D/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim()
          .slice(0, 19);

      case 'fechaExpiracion':
        // Formato: MM/YY
        const cleaned = value.replace(/\D/g, '');
        if (cleaned.length >= 2) {
          return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
        }
        return cleaned;

      case 'cvv':
        // Solo números, máximo 4 dígitos
        return value.replace(/\D/g, '').slice(0, 4);

      case 'codigoPostal':
        // Formato: XXXXX o XXXXX-XXXX
        return value.replace(/[^\d-]/g, '').slice(0, 10);

      default:
        return value;
    }
  };

  // Validar un campo individual
  const validateField = (name, value) => {
    if (!value || value.trim() === '') {
      return ERROR_MESSAGES.required;
    }

    switch (name) {
      case 'email':
        return VALIDATION_PATTERNS.email.test(value)
          ? ''
          : ERROR_MESSAGES.email;

      case 'numeroTarjeta':
        return VALIDATION_PATTERNS.numeroTarjeta.test(value.replace(/\s/g, ''))
          ? ''
          : ERROR_MESSAGES.numeroTarjeta;

      case 'fechaExpiracion':
        if (!VALIDATION_PATTERNS.fechaExpiracion.test(value)) {
          return ERROR_MESSAGES.fechaExpiracion;
        }
        // Validar que la fecha no haya expirado
        const [month, year] = value.split('/');
        const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
        return expDate > new Date()
          ? ''
          : 'La tarjeta ha expirado';

      case 'cvv':
        return VALIDATION_PATTERNS.cvv.test(value)
          ? ''
          : ERROR_MESSAGES.cvv;

      case 'codigoPostal':
        return VALIDATION_PATTERNS.codigoPostal.test(value)
          ? ''
          : ERROR_MESSAGES.codigoPostal;

      case 'nombre':
        return value.trim().length >= 3
          ? ''
          : ERROR_MESSAGES.nombre;

      case 'direccion':
        return value.trim().length >= 5
          ? ''
          : ERROR_MESSAGES.direccion;

      case 'ciudad':
        return value.trim().length >= 2
          ? ''
          : ERROR_MESSAGES.ciudad;

      default:
        return '';
    }
  };

  // Manejar cambios en los campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatValue(name, value);

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Solo mostrar error si el campo ha sido tocado
    if (touched[name]) {
      const error = validateField(name, formattedValue);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Validar múltiples campos
  const validateForm = (fields) => {
    const newErrors = {};
    fields.forEach(name => {
      const error = validateField(name, formData[name]);
      if (error) {
        newErrors[name] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Marcar un campo como tocado
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    
    const error = validateField(name, formData[name]);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Resetear el formulario
  const resetForm = () => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  };

  return {
    formData,
    errors,
    touched,
    handleInputChange,
    handleBlur,
    validateForm,
    resetForm,
    setFormData
  };
};

export default useCheckoutForm;