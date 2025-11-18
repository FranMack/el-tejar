'use client';

import { Tent as Teeth, Smile, Zap, Sparkles, Heart, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Limpieza Dental',
      description: 'Limpieza profesional profunda para mantener tus dientes saludables y radiantes.'
    },
    {
      icon: Zap,
      title: 'Ortodoncia',
      description: 'Alineación dental moderna con tecnología de punta para la sonrisa que deseas.'
    },
    {
      icon: Sparkles,
      title: 'Implantes',
      description: 'Implantes dentales de alta calidad con resultados duraderos y naturales.'
    },
    {
      icon: Heart,
      title: 'Blanqueamiento',
      description: 'Blanqueamiento dental profesional para una sonrisa más blanca y brillante.'
    },
    {
      icon: Teeth,
      title: 'Prótesis Dentales',
      description: 'Prótesis personalizadas que se adaptan perfectamente a tu boca y estilo.'
    },
    {
      icon: Shield,
      title: 'Urgencias Odontológicas',
      description: 'Atención inmediata para emergencias dentales con máxima calidad de cuidado.'
    }
  ];

  return (
    <section id="services" className="w-full py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios odontológicos especializados para el cuidado completo de tu sonrisa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white rounded-xl shadow-sm hover:shadow-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
