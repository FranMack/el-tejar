"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <section
      id="hero"
      className="sticky w-full min-h-screen flex items-center justify-center overflow-hidden sm:pt-20"
    >
      {/* Background gradient */}
      <Image
        src="/banner_4.webp"
        alt="Background Hero"
        fill
        className="object-cover absolute inset-0 -z-10"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center gap-12 w-full">
          {/* Left content */}
          <div className="animate-fade-in space-y-8 w-full flex flex-col items-center justify-center">
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight text-center">
                Sonrisa Radiante, Salud Garantizada
              </h1>
              <p className="text-md md:text-lg text-muted-foreground max-w-lg leading-relaxed text-center">
                En Clínica Dental El Tejar, combinamos tecnología avanzada con
                la experiencia del Dr. Luciano Mackinnon para ofrecerte el mejor
                cuidado dental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-[75%] sm:w-full items-center justify-center">
              <a
                href="#contact"
                className="w-full sm:w-fit inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300 group"
              >
                Reserva tu turno
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </a>
              <a
                href="https://wa.me/5491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-fit inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
