/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { BookingCTA } from './components/BookingCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { BookingModal } from './components/BookingModal';
import { ServiceItem, PricingPlan } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceId(service.id);
    setIsBookingOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan) => {
    // Map pricing plan to a service
    const matchingServiceId = plan.id === 'essential'
      ? 'classic-cut'
      : plan.id === 'signature'
      ? 'hair-and-beard'
      : 'signature-ritual';
    setSelectedServiceId(matchingServiceId);
    setIsBookingOpen(true);
  };

  const handleExploreServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#09090c] text-[#f4f3ef] selection:bg-[#c59b63] selection:text-[#09090c]">
      {/* Fixed Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Sections */}
      <main>
        {/* Full Viewport Cinematic Hero */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* Editorial About & Master Craftsman Portrait */}
        <About onOpenBooking={() => handleOpenBooking()} />

        {/* Services Menu with Interactive Categories */}
        <Services onSelectService={handleSelectService} />

        {/* The 4 Principles / Pillars */}
        <WhyUs />

        {/* Curated Editorial Archive Gallery with Lightbox */}
        <Gallery />

        {/* Transparent Luxury Pricing Menus */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* Authentic Client Testimonials */}
        <Testimonials />

        {/* Studio Destination & Architectural Environment */}
        <Location onOpenBooking={() => handleOpenBooking()} />

        {/* Final Booking Concierge CTA */}
        <BookingCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Master Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Persistent Floating WhatsApp Concierge Button */}
      <WhatsAppFloat />

      {/* Frictionless Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultServiceId={selectedServiceId}
      />
    </div>
  );
}
