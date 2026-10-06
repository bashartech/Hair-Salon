import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Scissors } from 'lucide-react';
import { SALON_INFO } from '../data/barbershopData';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#why-us' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Studio', href: '#studio' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090c]/85 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Brand Wordmark (Single clean text element) */}
          <a
            href="#"
            className="flex items-center gap-2.5 group cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="w-8 h-8 rounded-full border border-[#c59b63]/30 flex items-center justify-center text-[#c59b63] group-hover:border-[#c59b63] transition-colors">
              <Scissors className="w-4 h-4 stroke-[1.75]" />
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] font-light uppercase text-[#f4f3ef] group-hover:text-[#c59b63] transition-colors leading-none">
                {SALON_INFO.name}
              </span>
              <span className="text-[9px] tracking-[0.25em] text-[#9e9d98] uppercase font-sans mt-0.5">
                Atelier Grooming
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Clean text with subtle underline) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase text-[#a9a8a3]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative py-1 hover:text-[#f4f3ef] transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c59b63] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenBooking()}
              className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.16em] text-[#09090c] bg-[#c59b63] hover:bg-[#dfbe8d] transition-all duration-300 rounded-sm shadow-[0_0_20px_rgba(197,155,99,0.2)] active:scale-[0.98]"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#e4e3df] hover:text-[#c59b63] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden bg-[#09090c]/95 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6 pt-4">
          <p className="text-[11px] tracking-[0.25em] text-[#c59b63] uppercase">Navigation</p>
          <div className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-serif text-3xl font-light tracking-wide text-[#f4f3ef] hover:text-[#c59b63] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#c59b63] text-[#09090c] hover:bg-[#dfbe8d] transition-colors rounded-sm flex items-center justify-center gap-2"
          >
            <span>Book Appointment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <div className="text-center text-xs text-[#8f8e89] tracking-wider pt-2">
            <span>{SALON_INFO.hours.weekdays}</span>
            <span className="mx-2">·</span>
            <span>{SALON_INFO.phone}</span>
          </div>
        </div>
      </div>
    </>
  );
};
