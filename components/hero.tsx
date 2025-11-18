'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Sonrisa Radiante, Salud Garantizada
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                En Clínica Dental El Tejar, combinamos tecnología avanzada con la experiencia del Dr. Luciano Mackinnon para ofrecerte el mejor cuidado dental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300 group"
              >
                Reserva tu turno
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="https://wa.me/5491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="relative h-full md:h-full min-h-96 animate-slide-in-right">
            <Image
              src="/portada.png"
              alt="Clínica Dental El Tejar"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
