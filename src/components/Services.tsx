import React, { useState } from 'react';
import { ArrowUpRight, Clock, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../data/barbershopData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-28 md:py-36 bg-[#0c0c10] relative">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c59b63]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c59b63]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
                HAUTE BARBERING MENU
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08]">
              Crafted For Your <br />
              <span className="italic font-serif text-[#c59b63]">Signature Look.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#9e9d98] leading-relaxed mb-6">
              From surgical skin fades to hot lather straight razor rituals, every appointment is executed with unhurried precision and premium botanicals.
            </p>

            {/* Interactive Filter Controls */}
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1 bg-[#131318] border border-white/[0.08] rounded-sm">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-xs ${
                  activeCategory === 'all'
                    ? 'bg-[#c59b63] text-[#09090c] font-semibold shadow-sm'
                    : 'text-[#9e9d98] hover:text-[#f4f3ef]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveCategory('cuts')}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-xs ${
                  activeCategory === 'cuts'
                    ? 'bg-[#c59b63] text-[#09090c] font-semibold shadow-sm'
                    : 'text-[#9e9d98] hover:text-[#f4f3ef]'
                }`}
              >
                Cuts & Tapers
              </button>
              <button
                onClick={() => setActiveCategory('beard')}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-xs ${
                  activeCategory === 'beard'
                    ? 'bg-[#c59b63] text-[#09090c] font-semibold shadow-sm'
                    : 'text-[#9e9d98] hover:text-[#f4f3ef]'
                }`}
              >
                Beard Sculpt
              </button>
              <button
                onClick={() => setActiveCategory('rituals')}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-xs ${
                  activeCategory === 'rituals'
                    ? 'bg-[#c59b63] text-[#09090c] font-semibold shadow-sm'
                    : 'text-[#9e9d98] hover:text-[#f4f3ef]'
                }`}
              >
                Full Rituals
              </button>
            </div>
          </div>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#121217] border border-white/[0.07] hover:border-[#c59b63]/60 transition-all duration-300 ease-out hover:-translate-y-1.5 p-7 rounded-sm flex flex-col justify-between cursor-pointer shadow-xl hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)]"
            >
              {/* Optional Service Photography on Featured Cards */}
              {service.image && (
                <div className="relative w-full h-44 mb-6 overflow-hidden rounded-xs border border-white/[0.06]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-[#121217]/30 to-transparent" />
                </div>
              )}

              <div>
                {/* Header: Service Number & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest text-[#c59b63] font-semibold">
                    {service.number}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#8e8d88]">
                    <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
                    <span className="font-mono">{service.duration}</span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl font-light text-[#f4f3ef] group-hover:text-[#c59b63] transition-colors leading-snug mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#9e9d98] leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* What is included */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-white/[0.05]">
                  {service.includes.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#b8b7b1]">
                      <span className="text-[#c59b63] mt-0.5">·</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Price & Arrow CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#7e7d78] block">Investment</span>
                  <span className="font-mono text-lg text-[#f4f3ef] font-medium group-hover:text-[#c59b63] transition-colors">
                    ${service.price}
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-[#c59b63] group-hover:text-[#dfbe8d] transition-colors">
                  <span>Book Service</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
