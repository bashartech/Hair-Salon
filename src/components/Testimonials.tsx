import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/barbershopData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-28 md:py-36 bg-[#0c0c10] border-t border-white/[0.05] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c59b63]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
                DISCERNING CLIENTELE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08]">
              Trusted By Those <br />
              <span className="italic font-serif text-[#c59b63]">Who Demand Excellence.</span>
            </h2>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/15 hover:border-[#c59b63] flex items-center justify-center text-white/80 hover:text-[#c59b63] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/15 hover:border-[#c59b63] flex items-center justify-center text-white/80 hover:text-[#c59b63] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => {
            const isFeatured = index === activeIndex;
            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`relative p-8 sm:p-10 rounded-sm transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isFeatured
                    ? 'bg-[#131319] border border-[#c59b63]/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)] -translate-y-1'
                    : 'bg-[#101015] border border-white/[0.06] hover:border-white/15'
                }`}
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex text-[#c59b63]">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#c59b63] stroke-[#c59b63]" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#c59b63]/25" />
                  </div>

                  {/* Quote */}
                  <p className="font-serif text-base sm:text-lg text-[#ecebe6] font-light leading-relaxed mb-8">
                    "{item.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-6 border-t border-white/[0.08] flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover ring-1 ring-[#c59b63]/40"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-serif text-base text-[#f4f3ef] font-medium leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-xs text-[#8e8d87] mt-0.5">
                      {item.title}
                    </p>
                    <span className="text-[10px] text-[#c59b63] uppercase tracking-wider block mt-1">
                      {item.service}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
