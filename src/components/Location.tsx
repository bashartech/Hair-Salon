import React from 'react';
import { MapPin, Clock, Phone, MessageSquare, Navigation, ArrowUpRight } from 'lucide-react';
import { SALON_INFO, ASSETS } from '../data/barbershopData';

interface LocationProps {
  onOpenBooking: () => void;
}

export const Location: React.FC<LocationProps> = ({ onOpenBooking }) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${SALON_INFO.name} ${SALON_INFO.address} ${SALON_INFO.city}`
  )}`;

  return (
    <section id="studio" className="py-28 md:py-36 bg-[#09090c] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#c59b63]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
            ATELIER DESTINATION
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08] mb-16">
          Visit The Studio. <br />
          <span className="italic font-serif text-[#c59b63]">Step Into The Sanctuary.</span>
        </h2>

        {/* Content Split: Details on Left, Stylized Map & Architectural Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details Card */}
          <div className="lg:col-span-5 bg-[#121217] border border-white/[0.08] p-8 sm:p-10 rounded-sm flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-serif text-2xl font-light text-[#f4f3ef] mb-6">
                The Mayfair Flagship
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a22] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7e7d78] block mb-1">Location</span>
                  <p className="text-sm sm:text-base text-[#e5e4e0] font-normal leading-relaxed">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-[#9e9d98] mt-0.5">{SALON_INFO.city}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a22] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0">
                  <Clock className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7e7d78] block mb-1">Atelier Hours</span>
                  <div className="space-y-1 text-sm text-[#e5e4e0]">
                    <p className="flex justify-between gap-6">
                      <span className="text-[#9e9d98]">Monday – Saturday</span>
                      <span className="font-mono text-xs">{SALON_INFO.hours.weekdays}</span>
                    </p>
                    <p className="flex justify-between gap-6">
                      <span className="text-[#9e9d98]">Sunday</span>
                      <span className="font-mono text-xs">{SALON_INFO.hours.sunday}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact numbers */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 rounded-sm bg-[#1a1a22] border border-white/[0.08] flex items-center justify-center text-[#c59b63] shrink-0">
                  <Phone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#7e7d78] block mb-1">Direct Lines</span>
                  <p className="text-sm font-mono text-[#e5e4e0]">Phone: {SALON_INFO.phone}</p>
                  <p className="text-sm font-mono text-[#c59b63] mt-0.5">WhatsApp: +{SALON_INFO.whatsappNumber}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#09090c] bg-[#c59b63] hover:bg-[#dfbe8d] transition-colors rounded-xs shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-medium uppercase tracking-[0.16em] text-[#e5e4e0] border border-white/20 hover:border-[#c59b63] hover:text-[#c59b63] transition-colors rounded-xs"
              >
                <span>Book Visit</span>
              </button>
            </div>
          </div>

          {/* Architectural Map & Interior Visual Card */}
          <div className="lg:col-span-7 relative rounded-sm overflow-hidden border border-white/[0.08] min-h-[420px] bg-[#121217] flex flex-col justify-end p-8 group">
            <img
              src={ASSETS.interior}
              alt="Valenti Atelier interior salon environment"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/60 to-transparent" />

            {/* Floating studio features */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="glass-panel p-4 rounded-xs">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c59b63] block mb-1">
                  Private Valet
                </span>
                <span className="text-xs text-[#cfcec9]">Complimentary underground parking</span>
              </div>

              <div className="glass-panel p-4 rounded-xs">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c59b63] block mb-1">
                  Bespoke Bar
                </span>
                <span className="text-xs text-[#cfcec9]">Specialty roast coffee & single malt</span>
              </div>

              <div className="glass-panel p-4 rounded-xs">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#c59b63] block mb-1">
                  Private Suites
                </span>
                <span className="text-xs text-[#cfcec9]">Acoustic noise isolation for calls</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
