'use client';

import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center font-bold text-primary-foreground">
                EL
              </div>
              <h3 className="text-xl font-bold">El Tejar</h3>
            </div>
            <p className="text-primary-foreground/80">
              Clínica dental profesional con más de 15 años de experiencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Navegación</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#hero" className="hover:text-primary-foreground transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Servicios</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">Odontólogo</a></li>
              <li><a href="#contact" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Limpieza Dental</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Implantes</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Ortodoncia</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Blanqueamiento</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/80 text-sm">
            <p>&copy; 2025 Clínica Dental El Tejar. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
