'use client';

import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5491123456789"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:scale-125 transition-transform" />
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        ¡Hablemos por WhatsApp!
      </div>
    </a>
  );
};

export default WhatsAppButton;
