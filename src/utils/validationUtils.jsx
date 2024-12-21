export const validateField = (name, value) => {
    const errors = [];
  
    switch (name) {
      case 'nombre':
        if (!value.trim()) {
          errors.push('El nombre es requerido');
        } else if (value.trim().length < 3) {
          errors.push('El nombre debe tener al menos 3 caracteres');
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(value)) {
          errors.push('El nombre solo debe contener letras');
        }
        break;
  
      case 'email':
        if (!value) {
          errors.push('El email es requerido');
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.push('Email inválido');
        }
        break;
  
      case 'direccion':
        if (!value.trim()) {
          errors.push('La dirección es requerida');
        } else if (value.trim().length < 5) {
          errors.push('La dirección debe ser más específica');
        }
        break;
  
      case 'ciudad':
        if (!value.trim()) {
          errors.push('La ciudad es requerida');
        }
        break;
  
      case 'codigoPostal':
        if (!value.trim()) {
          errors.push('El código postal es requerido');
        } else if (!/^\d{5}(-\d{4})?$/.test(value)) {
          errors.push('Código postal inválido');
        }
        break;
  
      case 'numeroTarjeta':
        if (!value.trim()) {
          errors.push('El número de tarjeta es requerido');
        } else if (!/^\d{16}$/.test(value.replace(/\s/g, ''))) {
          errors.push('Número de tarjeta inválido');
        }
        break;
  
      case 'fechaExpiracion':
        if (!value.trim()) {
          errors.push('La fecha de expiración es requerida');
        } else if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(value)) {
          errors.push('Fecha de expiración inválida (MM/AA)');
        } else {
          const [month, year] = value.split('/');
          const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
          const today = new Date();
          if (expDate < today) {
            errors.push('La tarjeta ha expirado');
          }
        }
        break;
  
      case 'cvv':
        if (!value.trim()) {
          errors.push('El CVV es requerido');
        } else if (!/^\d{3,4}$/.test(value)) {
          errors.push('CVV inválido');
        }
        break;
  
      default:
        break;
    }
  
    return errors;
  };
  
  export const formatCreditCard = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
  
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
  
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  export const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };