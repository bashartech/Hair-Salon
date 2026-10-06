import React from 'react';
import { WHY_CHOOSE_US } from '../data/barbershopData';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-28 md:py-36 bg-[#09090c] border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c59b63]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
              THE VALENTI PHILOSOPHY
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.1]">
            The Details Make <br />
            <span className="italic font-serif text-[#c59b63]">The Difference.</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-[#9e9d98] leading-relaxed">
            In bespoke grooming, millimeters separate ordinary from extraordinary. We operate by four founding standards to deliver consistent distinction.
          </p>
        </div>

        {/* 4 Pillars Grid (Editorial Luxury Layout, Anti-SaaS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <div
              key={item.number}
              className="relative p-8 bg-[#111116] border-l-2 border-l-[#c59b63]/40 border-y border-r border-white/[0.06] hover:border-l-[#c59b63] hover:bg-[#14141a] transition-all duration-300 group"
            >
              {/* Number Index */}
              <div className="flex items-baseline justify-between mb-8">
                <span className="font-mono text-2xl font-light text-[#c59b63] tracking-widest">
                  {item.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#6b6a65] group-hover:text-[#c59b63] transition-colors">
                  Standard
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-2xl font-light text-[#f4f3ef] group-hover:text-[#c59b63] transition-colors mb-3 leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#8e8d87] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
