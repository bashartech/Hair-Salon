import React from 'react';
import { Scissors, ArrowUp, Instagram, Facebook, Youtube } from 'lucide-react';
import { SALON_INFO } from '../data/barbershopData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Philosophy', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Studio Destination', href: '#studio' },
  ];

  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] text-[#8e8d88] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand & Ethos */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-8 h-8 rounded-full border border-[#c59b63]/30 flex items-center justify-center text-[#c59b63]">
                <Scissors className="w-4 h-4 stroke-[1.75]" />
              </span>
              <span className="font-serif text-2xl tracking-[0.2em] font-light uppercase text-[#f4f3ef]">
                {SALON_INFO.name}
              </span>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#d4d3ce] font-light italic mb-4 max-w-sm">
              "Precision grooming. Defined by detail."
            </p>

            <p className="text-xs sm:text-sm text-[#8a8984] max-w-md leading-relaxed mb-6 font-sans">
              An international grooming sanctuary dedicated to traditional craftsmanship, bespoke face architecture, and unhurried luxury.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#c59b63] text-[#09090c] hover:bg-[#dfbe8d] transition-colors rounded-xs"
            >
              Book Your Visit
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c59b63] font-medium block mb-5">
              Navigation
            </span>
            <ul className="space-y-3 text-xs tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#f4f3ef] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atelier Contact & Hours */}
          <div className="lg:col-span-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c59b63] font-medium block mb-5">
              Atelier Concierge
            </span>
            <div className="space-y-3 text-xs leading-relaxed">
              <p className="text-[#cfcec9]">
                <strong className="text-white block font-medium">Flagship Suite:</strong>
                {SALON_INFO.address}, {SALON_INFO.city}
              </p>
              <p className="text-[#cfcec9]">
                <strong className="text-white block font-medium">Concierge Direct:</strong>
                {SALON_INFO.phone}
              </p>
              <p className="text-[#cfcec9]">
                <strong className="text-white block font-medium">Email Enquiries:</strong>
                {SALON_INFO.email}
              </p>
              <div className="pt-2">
                <span className="text-[#c59b63] font-mono text-[11px] block">
                  {SALON_INFO.hours.weekdays} (Mon - Sat)
                </span>
                <span className="text-[#8a8984] font-mono text-[11px] block">
                  {SALON_INFO.hours.sunday} (Sunday)
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-[#c59b63] flex items-center justify-center text-white/70 hover:text-[#c59b63] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-[#c59b63] flex items-center justify-center text-white/70 hover:text-[#c59b63] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-white/10 hover:border-[#c59b63] flex items-center justify-center text-white/70 hover:text-[#c59b63] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#706f6a]">
          <div>
            © 2026 {SALON_INFO.fullName}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#555450]">Crafted for the modern gentleman</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-[#cfcec9] hover:text-[#c59b63] transition-colors group cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
