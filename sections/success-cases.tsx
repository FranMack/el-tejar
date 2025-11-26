"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const SuccessCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cases = [
    {
      id: 1,
      title: "Sonrisa Perfecta",
      before: "Antes",
      after: "Después",
      query: "dental before after transformation smile improvement",
      urlBefore: "/casos-exito/antes_1.webp",
      urlAfter: "/casos-exito/despues_1.webp",
    },
    {
      id: 2,
      title: "Blanqueamiento Profesional",
      before: "Antes",
      after: "Después",
      query: "teeth whitening before after professional dental",
      urlBefore: "/casos-exito/antes_2.webp",
      urlAfter: "/casos-exito/despues_2.webp",
    },
    {
      id: 3,
      title: "Implantes Dentales",
      before: "Antes",
      after: "Después",
      query: "dental implants before after restoration smile",
      urlBefore: "/casos-exito/antes_3.webp",
      urlAfter: "/casos-exito/despues_3.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cases.length) % cases.length);
  };

  return (
    <section id="cases" className="w-full py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformaciones sonrientes que hablan por sí solas. Mira los
            resultados de nuestros tratamientos.
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {cases.map((case_) => (
                <div
                  key={case_.id}
                  className="w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-2xl shadow-lg">
                    {/* Before */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wide">
                        ANTES
                      </p>
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={case_.urlBefore}
                          alt={`${case_.title} - Antes`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* After */}
                    <div className="space-y-4">
                      <p className="text-sm font-semibold text-accent uppercase tracking-wide">
                        DESPUÉS
                      </p>
                      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                        <Image
                          src={case_.urlAfter}
                          alt={`${case_.title} - Después`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    {/* Mobile navigation */}
                    <div className="md:hidden flex gap-15 justify-center mt-3">
                      <button
                        onClick={prevSlide}
                        className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
                      >
                        <ChevronLeft size={20} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors"
                      >
                        <ChevronRight size={20} />
                      </button>
                    </div>
                    {/* Dots */}
                    <div className="flex sm:hidden gap-2 justify-center mt-2">
                      {cases.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide
                              ? "bg-primary w-8"
                              : "bg-primary/30 w-2 hover:bg-primary/50"
                          }`}
                          aria-label={`Ir a caso ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Case title */}
                  <h3 className="text-2xl font-bold text-foreground mt-6 text-center">
                    {case_.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute -left-6 top-1/3 p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors duration-300 hidden md:flex items-center justify-center"
            aria-label="Caso anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-6 top-1/3 p-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-colors duration-300 hidden md:flex items-center justify-center"
            aria-label="Siguiente caso"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="hidden sm:flex gap-2 justify-center mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-primary/30 w-2 hover:bg-primary/50"
                }`}
                aria-label={`Ir a caso ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCases;
