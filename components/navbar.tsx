"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#hero" },
    { label: "Servicios", href: "#services" },
    { label: "Odontólogo", href: "#about" },
    { label: "Instalaciones", href: "#installations" },
    { label: "Casos de Éxito", href: "#cases" },
    { label: "Horarios", href: "#schedule" },
    { label: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="sticky lg:fixed top-0 z-50 w-full bg-white shadow-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold relative">
              <Image
                src="/muela.png"
                alt="El Tejar Logo"
                fill
                className="object-contain p-2"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">El Tejar</h1>
              <p className="text-xs text-muted-foreground">Clínica Dental</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-200"
            >
              Reserva tu turno
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-primary/10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="w-fit block  mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-center hover:bg-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Reserva tu turno
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
