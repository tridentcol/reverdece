import React from 'react';
import { CheckCircle, Package } from 'lucide-react';

const OrderConfirmation = ({ orderData, handleFinish }) => {
  return (
    <div className="space-y-8">
      {/* Cabecera de confirmación */}
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-reverdece-800 mb-2">
          ¡Pedido Confirmado!
        </h2>
        <p className="text-gray-600">
          Gracias por tu compra. Te hemos enviado un email con los detalles de tu pedido.
        </p>
      </div>

      {/* Detalles del pedido */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-6">
        {/* Información de envío */}
        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Información de Envío
          </h3>
          <div className="space-y-2 text-gray-600">
            <p><span className="font-medium">Nombre:</span> {orderData.nombre}</p>
            <p><span className="font-medium">Email:</span> {orderData.email}</p>
            <p><span className="font-medium">Dirección:</span> {orderData.direccion}</p>
            <p><span className="font-medium">Ciudad:</span> {orderData.ciudad}</p>
            <p><span className="font-medium">Código Postal:</span> {orderData.codigoPostal}</p>
          </div>
        </div>

        {/* Método de envío */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Método de Envío</h3>
          <p className="text-gray-600">
            {orderData.shippingMethod === 'express' 
              ? 'Envío Express (1-2 días hábiles)'
              : 'Envío Estándar (3-5 días hábiles)'}
          </p>
        </div>
      </div>

      {/* Botón de finalización */}
      <div className="flex justify-center pt-4">
        <button
          onClick={handleFinish}
          className="btn-primary"
        >
          Volver a la Tienda
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;