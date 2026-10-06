import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { SALON_INFO } from '../data/barbershopData';

interface BookingCTAProps {
  onOpenBooking: () => void;
}

export const BookingCTA: React.FC<BookingCTAProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I'd like to book an appointment at ${SALON_INFO.name} Atelier.`
  )}`;

  return (
    <section className="py-24 md:py-32 bg-[#0c0c10] border-t border-white/[0.05] relative overflow-hidden">
      {/* Subtle warm bronze radiant background */}
      <div className="absolute inset-0 bg-radial-gradient from-[#c59b63]/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#c59b63]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
            APPOINTMENT CONCIERGE
          </span>
          <span className="w-8 h-[1px] bg-[#c59b63]" />
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08] mb-6">
          Ready For Your Next <br />
          <span className="italic font-serif text-[#c59b63]">Signature Look?</span>
        </h2>

        <p className="text-sm sm:text-base text-[#a8a7a2] max-w-xl mx-auto mb-10 leading-relaxed font-sans">
          Reserve your private station in seconds. Our master craftsmen tailor every cut, beard line, and hot towel ritual to your individual presence.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#09090c] bg-[#c59b63] hover:bg-[#dfbe8d] transition-all rounded-xs shadow-[0_4px_30px_rgba(197,155,99,0.3)] active:scale-[0.98]"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-[#25D366] hover:text-[#3ce07c] bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 transition-all rounded-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#82817d]">
          <span>Direct confirmations</span>
          <span>·</span>
          <span>No prepayment required</span>
          <span>·</span>
          <span>Complimentary valet</span>
        </div>
      </div>
    </section>
  );
};
