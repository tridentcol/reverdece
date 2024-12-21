import React from 'react';
import { Shield, Leaf, Heart, Users, Award, Recycle, Globe } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Ana García',
      position: 'Fundadora & CEO',
      image: '/api/placeholder/300/300',
      description: 'Con más de 15 años de experiencia en la industria cosmética natural.'
    },
    {
      name: 'Carlos Ruiz',
      position: 'Director de Investigación',
      image: '/api/placeholder/300/300',
      description: 'PhD en Química Verde y experto en formulaciones naturales.'
    },
    {
      name: 'Laura Martínez',
      position: 'Directora de Sostenibilidad',
      image: '/api/placeholder/300/300',
      description: 'Especialista en desarrollo sostenible y economía circular.'
    }
  ];

  const certifications = [
    {
      name: 'Certificación Orgánica',
      icon: <Leaf className="w-8 h-8 text-reverdece-600" />,
      description: 'Ingredientes 100% orgánicos certificados'
    },
    {
      name: 'Cruelty-Free',
      icon: <Heart className="w-8 h-8 text-reverdece-600" />,
      description: 'No testado en animales'
    },
    {
      name: 'Eco-Friendly',
      icon: <Recycle className="w-8 h-8 text-reverdece-600" />,
      description: 'Empaques reciclables y biodegradables'
    },
    {
      name: 'Fair Trade',
      icon: <Globe className="w-8 h-8 text-reverdece-600" />,
      description: 'Comercio justo certificado'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-reverdece-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nuestra Historia
          </h1>
          <p className="text-xl text-reverdece-100 max-w-3xl mx-auto">
            Transformando el cuidado del cabello con el poder de la naturaleza desde 2020
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-reverdece-800 mb-6">
                El Comienzo de Reverdece
              </h2>
              <p className="text-gray-600 mb-4">
                Todo comenzó con una simple idea: crear productos para el cuidado del cabello 
                que fueran tan buenos para nuestro planeta como lo son para nuestro cabello. 
                Fundada en 2020, Reverdece nació del deseo de revolucionar la industria 
                cosmética con productos 100% naturales y sostenibles.
              </p>
              <p className="text-gray-600 mb-4">
                Después de años de investigación y desarrollo, creamos una línea de productos 
                que combina ingredientes naturales ancestrales con tecnología moderna, 
                ofreciendo resultados excepcionales sin comprometer nuestros valores.
              </p>
              <p className="text-gray-600">
                Hoy, Reverdece es líder en el mercado de productos capilares naturales, 
                con una comunidad creciente de personas comprometidas con el cuidado 
                consciente de su cabello y del medio ambiente.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="Nuestra historia"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-reverdece-800 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-reverdece-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-reverdece-600" />
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">
                Sostenibilidad
              </h3>
              <p className="text-gray-600">
                Comprometidos con prácticas sostenibles y empaques eco-amigables
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-reverdece-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-reverdece-600" />
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">
                Calidad
              </h3>
              <p className="text-gray-600">
                Ingredientes premium y procesos de fabricación certificados
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-reverdece-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-reverdece-600" />
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">
                Ética
              </h3>
              <p className="text-gray-600">
                Productos cruelty-free y comercio justo
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-reverdece-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-reverdece-600" />
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">
                Comunidad
              </h3>
              <p className="text-gray-600">
                Construyendo una comunidad comprometida con la belleza natural
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-reverdece-800 mb-12">
            Nuestro Equipo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-lg">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-reverdece-800">{member.name}</h3>
                <p className="text-accent-600 mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-reverdece-800 mb-12">
            Nuestras Certificaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-16 h-16 bg-reverdece-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {cert.icon}
                </div>
                <h3 className="text-xl font-semibold text-reverdece-800 mb-2">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-reverdece-700 to-accent-700">
        <div className="max-w-7xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Únete a Nuestra Comunidad</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Descubre nuestros productos naturales y sé parte del cambio hacia un cuidado del cabello más consciente y sostenible.
          </p>
          <button className="bg-white text-reverdece-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Ver Productos
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;