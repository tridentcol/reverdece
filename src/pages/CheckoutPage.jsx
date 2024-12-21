// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CheckoutSteps from '../components/checkout/CheckoutSteps';
import ShippingForm from '../components/checkout/forms/ShippingForm';
import PaymentForm from '../components/checkout/forms/PaymentForm';
import OrderConfirmation from '../components/checkout/OrderConfirmation';
import OrderSummary from '../components/checkout/OrderSummary';
import { useCheckoutForm } from '../hooks/useCheckoutForm';

const CHECKOUT_STEPS = {
  SHIPPING: 'shipping',
  PAYMENT: 'payment',
  CONFIRMATION: 'confirmation'
};

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(CHECKOUT_STEPS.SHIPPING);
  const [shippingMethod, setShippingMethod] = useState('standard');
  
  const {
    formData,
    errors,
    handleInputChange,
    validateForm,
    setFormData
  } = useCheckoutForm({
    // Shipping Information
    nombre: '',
    email: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    // Payment Information
    numeroTarjeta: '',
    fechaExpiracion: '',
    cvv: '',
    shippingMethod: 'standard'
  });

  // Redirigir si el carrito está vacío
  if (cart.length === 0) {
    return navigate('/cart');
  }

  const handleShippingSubmit = (e) => {
    e.preventDefault();
    const fieldsToValidate = ['nombre', 'email', 'direccion', 'ciudad', 'codigoPostal'];
    if (validateForm(fieldsToValidate)) {
      setCurrentStep(CHECKOUT_STEPS.PAYMENT);
    }
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    const fieldsToValidate = ['numeroTarjeta', 'fechaExpiracion', 'cvv'];
    if (validateForm(fieldsToValidate)) {
      setCurrentStep(CHECKOUT_STEPS.CONFIRMATION);
    }
  };

  const handleConfirmOrder = () => {
    // Aquí iría la lógica para procesar el pedido
    clearCart();
    navigate('/');
  };

  const renderStep = () => {
    switch (currentStep) {
      case CHECKOUT_STEPS.SHIPPING:
        return (
          <ShippingForm
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            handleSubmit={handleShippingSubmit}
            shippingMethod={shippingMethod}
            setShippingMethod={setShippingMethod}
          />
        );
      
      case CHECKOUT_STEPS.PAYMENT:
        return (
          <PaymentForm
            formData={formData}
            handleInputChange={handleInputChange}
            errors={errors}
            handleSubmit={handlePaymentSubmit}
            handleBack={() => setCurrentStep(CHECKOUT_STEPS.SHIPPING)}
          />
        );
      
      case CHECKOUT_STEPS.CONFIRMATION:
        return (
          <OrderConfirmation
            orderData={formData}
            handleFinish={handleConfirmOrder}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-reverdece-800 text-center mb-8">
            Checkout
          </h1>
          <CheckoutSteps currentStep={currentStep} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario Principal */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {renderStep()}
            </div>
          </div>

          {/* Resumen del Pedido */}
          <div className="lg:col-span-1">
            <OrderSummary shippingMethod={shippingMethod} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;