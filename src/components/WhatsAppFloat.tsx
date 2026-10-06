import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/barbershopData';

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMessage = `Hi, I'd like to book an appointment at ${SALON_INFO.name} Atelier.`;
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:block px-3.5 py-1.5 glass-panel text-xs text-[#f4f3ef] tracking-wide rounded-sm shadow-xl border border-white/10 transition-all duration-200 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with us on WhatsApp
      </div>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Subtle breathing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:opacity-50 animate-ping duration-1000 pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
      </a>
    </aside>
  );
};
