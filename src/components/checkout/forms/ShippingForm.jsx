import React from 'react';
import { MapPin, Truck } from 'lucide-react';

const ShippingForm = ({
  formData,
  handleInputChange,
  errors,
  handleSubmit,
  shippingMethod,
  setShippingMethod
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Información Personal */}
      <div>
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="w-6 h-6 text-reverdece-600" />
          <h2 className="text-2xl font-bold text-reverdece-800">
            Información de Envío
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre Completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.nombre ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Dirección
            </label>
            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.direccion ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.direccion && (
              <p className="text-red-500 text-sm mt-1">{errors.direccion}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ciudad
            </label>
            <input
              type="text"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.ciudad ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.ciudad && (
              <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Código Postal
            </label>
            <input
              type="text"
              name="codigoPostal"
              value={formData.codigoPostal}
              onChange={handleInputChange}
              className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500
                ${errors.codigoPostal ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.codigoPostal && (
              <p className="text-red-500 text-sm mt-1">{errors.codigoPostal}</p>
            )}
          </div>
        </div>
      </div>

      {/* Método de Envío */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Truck className="w-6 h-6 text-reverdece-600" />
          <h3 className="text-lg font-semibold">Método de Envío</h3>
        </div>

        <div className="space-y-2">
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="shippingMethod"
              value="standard"
              checked={shippingMethod === 'standard'}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Envío Estándar</p>
              <p className="text-sm text-gray-500">3-5 días hábiles - Gratis</p>
            </div>
          </label>
          
          <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
            <input
              type="radio"
              name="shippingMethod"
              value="express"
              checked={shippingMethod === 'express'}
              onChange={(e) => setShippingMethod(e.target.value)}
              className="mr-2"
            />
            <div>
              <p className="font-medium">Envío Express</p>
              <p className="text-sm text-gray-500">1-2 días hábiles - $9.99</p>
            </div>
          </label>
        </div>
      </div>

      <div className="pt-6">
        <button type="submit" className="w-full btn-primary">
          Continuar al Pago
        </button>
      </div>
    </form>
  );
};

export default ShippingForm;