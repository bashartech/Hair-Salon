import React from 'react';
import { ArrowRight, Scissors, Clock, Award, ShieldCheck } from 'lucide-react';
import { ASSETS, SALON_INFO } from '../data/barbershopData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#09090c] border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Craftsman Portrait with Framing Details */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-sm border border-white/[0.08] shadow-2xl group">
              <img
                src={ASSETS.about}
                alt="Seasoned master craftsman barber with shears at Valenti Atelier"
                className="w-full h-[520px] md:h-[620px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090c] via-transparent to-black/20" />
              
              {/* Floating Quote Stamp inside image */}
              <div className="absolute bottom-6 left-6 right-6 p-5 glass-panel rounded-sm border border-white/10">
                <p className="font-serif italic text-base sm:text-lg text-[#f4f3ef] font-light leading-snug">
                  "Precision is not an act, it is a discipline. Every angle matters when defining a gentleman's presence."
                </p>
                <div className="mt-3 flex items-center justify-between text-[11px] uppercase tracking-wider text-[#9e9d98]">
                  <span className="text-[#c59b63] font-medium">— Valenti Master Guild</span>
                  <span>Savile Row Heritage</span>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold edge accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-[#c59b63]/40 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Narrative & Quantitative Metrics */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Editorial Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[1px] bg-[#c59b63]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
                THE ATELIER EXPERIENCE
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.1] mb-6">
              More Than A Haircut. <br />
              <span className="font-serif italic text-[#c59b63]">An Art of Distinction.</span>
            </h2>

            {/* Narrative Prose */}
            <p className="text-base sm:text-lg text-[#b0afa9] font-normal leading-relaxed mb-6">
              We believe grooming is more than maintaining your appearance. It is an act of quiet confidence, bespoke craftsmanship, and taking the unhurried time to ensure every line, taper, and contour elevates your character.
            </p>
            <p className="text-sm text-[#8a8984] leading-relaxed mb-8">
              Founded in {SALON_INFO.established}, {SALON_INFO.name} was envisioned as an antidote to conveyor-belt barber shops. In our atelier, each client receives a private station, bespoke bone-structure consultation, and services executed with surgical scissors and straight-razor mastery.
            </p>

            {/* Action Link */}
            <div className="mb-12">
              <button
                onClick={onOpenBooking}
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-medium text-[#c59b63] hover:text-[#dfbe8d] transition-colors"
              >
                <span>Reserve A Personal Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </div>

            {/* Proof Metrics (Claim-to-Proof Adjacency with Tabular Figures) */}
            <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#f4f3ef] font-light tabular-nums">
                  12<span className="text-[#c59b63] font-sans">+</span>
                </span>
                <span className="text-xs text-[#9e9d98] uppercase tracking-wider block mt-1">
                  Years of Craft
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#f4f3ef] font-light tabular-nums">
                  15K<span className="text-[#c59b63] font-sans">+</span>
                </span>
                <span className="text-xs text-[#9e9d98] uppercase tracking-wider block mt-1">
                  Clients Served
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#f4f3ef] font-light tabular-nums">
                  4.9<span className="text-[#c59b63] font-sans">★</span>
                </span>
                <span className="text-xs text-[#9e9d98] uppercase tracking-wider block mt-1">
                  Average Rating
                </span>
              </div>

              <div>
                <span className="block font-serif text-3xl sm:text-4xl text-[#f4f3ef] font-light tabular-nums">
                  8
                </span>
                <span className="text-xs text-[#9e9d98] uppercase tracking-wider block mt-1">
                  Expert Barbers
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
