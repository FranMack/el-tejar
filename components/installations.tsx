"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Installations = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 1,
      alt: "Consultorio moderno",
      query: "modern dental consultation room white blue design",
      url: "/instalaciones/fachada_clinica.webp",
    },
    {
      id: 2,
      alt: "Sala de espera",
      query: "modern dental waiting room white furniture",
      url: "/instalaciones/aboutUs.webp",
    },
    {
      id: 3,
      alt: "Equipamiento",
      query: "modern dental equipment technology clinic",
      url: "/instalaciones/maquina_rayos.webp",
    },
    {
      id: 4,
      alt: "Exterior clínica",
      query: "modern dental clinic exterior architecture",
      url: "/instalaciones/sillon.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="installations" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras Instalaciones
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con equipamiento de última tecnología en un ambiente
            confortable y profesional.
          </p>
        </div>

        <div className="relative lg:w-[80%] w-full h-96 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl group ">
          {/* Carousel */}
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white text-foreground rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Slide anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/80 hover:bg-white text-foreground rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Siguiente slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installations;
