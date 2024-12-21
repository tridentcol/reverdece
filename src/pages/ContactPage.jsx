import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Form submitted:', formData);
    alert('Mensaje enviado con éxito');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-reverdece-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-reverdece-100">
            Estamos aquí para ayudarte. ¡Contáctanos por cualquier medio!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-reverdece-800 mb-6">
              Información de Contacto
            </h2>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-reverdece-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Teléfono</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                  <p className="text-gray-600">Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MessageSquare className="w-6 h-6 text-reverdece-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-600">+1 (234) 567-8900</p>
                  <p className="text-gray-600">Respuesta inmediata</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-reverdece-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600">info@reverdece.com</p>
                  <p className="text-gray-600">soporte@reverdece.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-reverdece-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Ubicación</h3>
                  <p className="text-gray-600">123 Calle Principal</p>
                  <p className="text-gray-600">Ciudad, País</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Síguenos en Redes Sociales</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-reverdece-100 rounded-full flex items-center justify-center hover:bg-reverdece-200 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-reverdece-600" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-reverdece-100 rounded-full flex items-center justify-center hover:bg-reverdece-200 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-reverdece-600" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-reverdece-100 rounded-full flex items-center justify-center hover:bg-reverdece-200 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-reverdece-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-reverdece-800 mb-6">
              Envíanos un Mensaje
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-reverdece-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;