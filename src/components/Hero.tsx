import React from 'react';
import { ArrowRight, ArrowDown, Star, Sparkles, Shield } from 'lucide-react';
import { ASSETS, SALON_INFO } from '../data/barbershopData';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#09090c]">
      {/* Background Photography with Slow Cinematic Ambient Motion */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Master barber precision styling client in dark luxury atelier"
          className="w-full h-full object-cover object-center scale-[1.03] transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Cinematic Scrims: Multi-layer gradient overlays ensuring WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-[#09090c]/70 to-[#09090c]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090c]/90 via-[#09090c]/60 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/80" />
      </div>

      {/* Floating Elements (Layered Cards as in design reference) */}
      {/* Floating Card 1: Top Right / Middle Right - Signature Cut Feature */}
      <div className="hidden lg:block absolute right-12 xl:right-24 top-36 z-20 max-w-xs animate-fade-in">
        <div className="glass-panel p-5 rounded-sm shadow-2xl backdrop-blur-xl border border-white/10 hover:border-[#c59b63]/50 transition-all duration-300 group">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c59b63] font-medium">
              01 — Signature Cut
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c59b63] animate-pulse" />
          </div>
          <h4 className="font-serif text-lg text-[#f4f3ef] font-medium leading-snug group-hover:text-[#c59b63] transition-colors">
            Precision haircut, styled to your character.
          </h4>
          <p className="text-xs text-[#9e9d98] mt-1.5 leading-relaxed">
            Surgical tapers & scissors work calibrated to your facial geometry.
          </p>
          <div className="mt-3 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-[#cfcec9]">
            <span className="font-mono text-[#c59b63]">From $35</span>
            <span className="text-[#888782]">45 min session</span>
          </div>
        </div>
      </div>

      {/* Floating Card 2: Bottom Right - Client Trust & Proof */}
      <div className="hidden md:block absolute right-8 lg:right-16 bottom-24 z-20 animate-fade-in">
        <div className="glass-panel px-5 py-4 rounded-sm shadow-2xl backdrop-blur-xl border border-white/10 flex items-center gap-4">
          <div className="flex -space-x-2.5 overflow-hidden">
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#09090c] object-cover"
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
              alt="Client avatar"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#09090c] object-cover"
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80"
              alt="Client avatar"
              referrerPolicy="no-referrer"
            />
            <img
              className="inline-block h-9 w-9 rounded-full ring-2 ring-[#09090c] object-cover"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80"
              alt="Client avatar"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold tracking-tight text-[#f4f3ef] font-mono">4.9</span>
              <div className="flex text-[#c59b63]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#c59b63] stroke-[#c59b63]" />
                ))}
              </div>
            </div>
            <span className="text-[11px] text-[#9e9d98] tracking-wide">
              500+ Discerning Gentleman Reviews
            </span>
          </div>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2.5 mb-6 text-xs uppercase tracking-[0.25em] text-[#c59b63]">
            <span className="w-6 h-[1px] bg-[#c59b63]" />
            <span className="font-medium">EST. {SALON_INFO.established} · BESPOKE GROOMING ATELIER</span>
          </div>

          {/* Headline (Editorial Serif Statement) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-[#f4f3ef] leading-[1.05] text-balance mb-6">
            Where Refinement <br />
            <span className="font-serif italic font-normal text-[#c59b63] relative inline-block">
              Meets Confidence
              <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-[#c59b63] via-[#dfbe8d] to-transparent opacity-60" />
            </span>
          </h1>

          {/* Subtitle Copy */}
          <p className="text-base sm:text-lg text-[#b8b7b2] font-normal leading-relaxed max-w-xl mb-10 font-sans">
            We don't just cut. We architect your signature presence. Precision scissor craft, artisanal beard sculpting, and an unhurried sanctuary curated for the modern gentleman.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#09090c] bg-[#c59b63] hover:bg-[#dfbe8d] transition-all duration-300 rounded-sm shadow-[0_4px_30px_rgba(197,155,99,0.3)] active:scale-[0.98]"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            <button
              onClick={onExploreServices}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#e5e4e0] hover:text-[#c59b63] border border-white/15 hover:border-[#c59b63]/50 transition-all duration-300 rounded-sm glass-panel-subtle"
            >
              <span>Explore Services</span>
              <ArrowDown className="w-3.5 h-3.5 text-[#c59b63]" />
            </button>
          </div>

          {/* Trust Attributes Bar below CTAs */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-lg">
            <div>
              <span className="block font-mono text-xs text-[#c59b63] font-semibold tracking-wider">100% BESPOKE</span>
              <span className="text-xs text-[#8f8e89]">No rushed turnarounds</span>
            </div>
            <div>
              <span className="block font-mono text-xs text-[#c59b63] font-semibold tracking-wider">PRIVATE BOOTHS</span>
              <span className="text-xs text-[#8f8e89]">Quiet acoustic comfort</span>
            </div>
            <div className="hidden sm:block">
              <span className="block font-mono text-xs text-[#c59b63] font-semibold tracking-wider">PREMIUM BAR</span>
              <span className="text-xs text-[#8f8e89]">Complimentary malt & coffee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 hover:text-[#c59b63] transition-colors cursor-pointer"
        onClick={onExploreServices}
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
};
