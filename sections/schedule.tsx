'use client';

import { Clock, Calendar, Phone } from 'lucide-react';

const Schedule = () => {
  const schedule = [
    { day: 'Lunes - Viernes', hours: '09:00 - 18:00' },
    { day: 'Sábado', hours: '09:00 - 14:00' },
    { day: 'Domingo', hours: 'Cerrado' }
  ];

  return (
    <section id="schedule" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nuestros Horarios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos disponibles para atenderte en el horario que mejor se adapte a tu rutina.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Schedule Cards */}
          {schedule.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-6 mx-auto">
                <Calendar className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-foreground text-center mb-2">{item.day}</h3>
              <p className="text-lg font-bold text-primary text-center">{item.hours}</p>
            </div>
          ))}

          {/* Contact info card */}
          <div className="md:col-span-3 mt-8 p-8 bg-primary text-primary-foreground rounded-2xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <Phone className="flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold mb-2">Teléfono</h4>
                  <a href="tel:+541123456789" className="text-primary-foreground/80 hover:text-primary-foreground">
                    +54 9 11 2345-6789
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold mb-2">Urgencias 24hs</h4>
                  <p className="text-primary-foreground/80">
                    Disponibles para emergencias dentales
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Calendar className="flex-shrink-0 mt-1" size={28} />
                <div>
                  <h4 className="font-semibold mb-2">Reservas Online</h4>
                  <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground">
                    Reserva tu turno aquí
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
