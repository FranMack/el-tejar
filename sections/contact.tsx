"use client";

import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Ponte en Contacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Dudas o deseas agendar una cita? Nos encantaría escucharte.
            Contáctanos por el medio que prefieras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="p-8 bg-white rounded-xl shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Teléfono
            </h3>
            <a
              href="tel:+541123456789"
              className="text-primary hover:text-accent transition-colors"
            >
              +54 9 11 2345-6789
            </a>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Email
            </h3>
            <a
              href="mailto:info@eltejar.com"
              className="text-primary hover:text-accent transition-colors"
            >
              info@eltejar.com
            </a>
          </div>

          <div className="p-8 bg-white rounded-xl shadow-sm border border-primary/10 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ubicación
            </h3>
            <p className="text-muted-foreground">
              Av. Principal 1234, Código Postal 1234
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Envíanos un Mensaje
            </h3>
            <ContactForm />
          </div>

          {/* Map Placeholder */}
          <div className="bg-muted rounded-2xl overflow-hidden shadow-lg h-96 md:h-auto flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.2156268297427!2d-58.45454!3d-34.6037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca3cf8d1dd4d%3A0x1234567890!2sAv%20Corrientes%201234!5e0!3m2!1ses!2sar!4v1234567890"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
