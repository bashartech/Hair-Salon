import React from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { PRICING_PLANS } from '../data/barbershopData';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (plan: PricingPlan) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-28 md:py-36 bg-[#09090c] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c59b63]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
              CURATED TIERS
            </span>
            <span className="w-8 h-[1px] bg-[#c59b63]" />
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08]">
            Simple, Transparent <br />
            <span className="italic font-serif text-[#c59b63]">Service Menus.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#9e9d98] leading-relaxed">
            All appointments include dedicated bone-structure consultation, herbal hair wash, and hot botanical towel finish. No hidden surcharges.
          </p>
        </div>

        {/* Luxury Service Menu Grid (Anti-SaaS) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isSignature = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-sm transition-all duration-300 flex flex-col justify-between p-8 sm:p-10 ${
                  isSignature
                    ? 'bg-[#121218] border-2 border-[#c59b63] shadow-[0_10px_40px_rgba(197,155,99,0.15)] lg:-translate-y-2'
                    : 'bg-[#0f0f14] border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {/* Recommended Badge on Signature Tier */}
                {isSignature && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#c59b63] text-[#09090c] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-xs shadow-md">
                    Most Requested Signature
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="border-b border-white/[0.08] pb-6 mb-8 text-center">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8e8d88] block mb-2 font-mono">
                      {plan.duration}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f4f3ef] tracking-wider mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#9e9d98] min-h-[32px]">
                      {plan.subtitle}
                    </p>
                    
                    {/* Price Display */}
                    <div className="mt-6 flex items-baseline justify-center gap-1">
                      <span className="font-mono text-4xl sm:text-5xl font-light text-[#f4f3ef]">
                        ${plan.price}
                      </span>
                      <span className="text-xs text-[#8e8d88] tracking-wider">/ session</span>
                    </div>
                  </div>

                  {/* Feature Inclusions */}
                  <div className="space-y-3.5 mb-10">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#c59b63] block font-medium mb-3">
                      Includes:
                    </span>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#cfcec9]">
                        <Check className="w-4 h-4 text-[#c59b63] shrink-0 mt-0.5 stroke-[2]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-all rounded-xs flex items-center justify-center gap-2 group ${
                    isSignature
                      ? 'bg-[#c59b63] text-[#09090c] hover:bg-[#dfbe8d] shadow-[0_4px_20px_rgba(197,155,99,0.3)]'
                      : 'border border-white/20 text-[#f4f3ef] hover:border-[#c59b63] hover:text-[#c59b63]'
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
