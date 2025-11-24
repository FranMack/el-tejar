"use client";
import { sendConsultAction } from "@/app/actions/send-consult";
import { ContactFormValues } from "@/app/interfaces/contact-form.interface";
import React, { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await sendConsultAction(formData);

      toast.success(
        "Gracias por tu mensaje. Nos pondremos en contacto pronto."
      );
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error(
        "Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente."
      );
      console.error("Error al enviar la consulta:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground transition-colors"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground transition-colors"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground transition-colors"
          placeholder="Tu teléfono"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-background text-foreground transition-colors resize-none"
          placeholder="Tu mensaje aquí..."
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-accent transition-colors duration-300"
      >
        Enviar Mensaje
      </button>
    </form>
  );
};
