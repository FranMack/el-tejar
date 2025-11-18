'use client';

import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 order-2 md:order-1">
            <Image
              src="/foto_dentista.webp"
              alt="Dr. Luciano Mackinnon"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Dr. Luciano Mackinnon
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Odontólogo especialista con más de 15 años de experiencia en odontología general y especializada.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Formación Profesional</h4>
                  <p className="text-muted-foreground">Graduado de la Universidad Nacional de Odontología con especialización en Implantología y Estética Dental.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Experiencia</h4>
                  <p className="text-muted-foreground">Más de 15 años tratando pacientes con excelencia profesional y dedicación absoluta a cada caso.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground">Compromiso</h4>
                  <p className="text-muted-foreground">Comprometido con la salud bucal y la satisfacción del paciente mediante técnicas innovadoras.</p>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block mt-8 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
            >
              Conoce más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
