import React from 'react';
import { CreditCard } from 'lucide-react';

const PaymentForm = ({
  formData,
  handleInputChange,
  errors,
  handleSubmit,
  handleBack
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <CreditCard className="w-6 h-6 text-reverdece-600" />
        <h2 className="text-2xl font-bold text-reverdece-800">
          Información de Pago
        </h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Número de Tarjeta
          </label>
          <input
            type="text"
            name="numeroTarjeta"
            value={formData.numeroTarjeta}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
              ${errors.numeroTarjeta ? 'border-red-500' : 'border-gray-300'}`}
            maxLength="19"
          />
          {errors.numeroTarjeta && (
            <p className="text-red-500 text-sm mt-1">{errors.numeroTarjeta}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de Expiración
            </label>
            <input
              type="text"
              name="fechaExpiracion"
              value={formData.fechaExpiracion}
              onChange={handleInputChange}
              placeholder="MM/AA"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.fechaExpiracion ? 'border-red-500' : 'border-gray-300'}`}
              maxLength="5"
            />
            {errors.fechaExpiracion && (
              <p className="text-red-500 text-sm mt-1">{errors.fechaExpiracion}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
              maxLength="4"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>
      </div>

      {/* Información de Seguridad */}
      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
        <p className="flex items-center gap-2">
          <span>🔒</span>
          Tus datos están seguros y encriptados
        </p>
      </div>

      <div className="flex justify-between pt-6">
        <button
          type="button"
          onClick={handleBack}
          className="text-gray-600 hover:text-gray-800"
        >
          Volver
        </button>
        <button type="submit" className="btn-primary">
          Revisar Pedido
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;