import React, { useState } from 'react';
import { X, Calendar, Clock, MessageSquare, CheckCircle, ArrowRight, User, Phone } from 'lucide-react';
import { SERVICES, SALON_INFO } from '../data/barbershopData';
import { BookingFormState } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultServiceId
}) => {
  const [form, setForm] = useState<BookingFormState>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: defaultServiceId || SERVICES[0].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '11:00 AM',
    specialRequests: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:30 PM',
    '03:00 PM', '04:30 PM', '06:00 PM', '07:30 PM'
  ];

  const selectedService = SERVICES.find((s) => s.id === form.serviceId) || SERVICES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refCode = `VAL-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const text = `Hi ${SALON_INFO.name},\nI would like to confirm my appointment:\n- Name: ${form.fullName}\n- Phone: ${form.phone}\n- Service: ${selectedService.title} ($${selectedService.price})\n- Date: ${form.date}\n- Preferred Time: ${form.timeSlot}${form.specialRequests ? `\n- Notes: ${form.specialRequests}` : ''}`;
    const url = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#09090c]/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#111116] border border-white/10 rounded-sm shadow-2xl p-6 sm:p-8 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#9e9d98] hover:text-[#f4f3ef] transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Confirmation Screen */
          <div className="py-6 text-center animate-fade-in">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#c59b63]/15 border border-[#c59b63]/40 flex items-center justify-center text-[#c59b63]">
              <CheckCircle className="w-7 h-7" />
            </div>

            <span className="text-[10px] tracking-[0.25em] uppercase text-[#c59b63] font-mono block mb-1">
              Ref: {bookingRef}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f4f3ef] mb-3">
              Appointment Reserved
            </h3>
            <p className="text-xs sm:text-sm text-[#9e9d98] leading-relaxed max-w-sm mx-auto mb-6">
              Thank you, <strong className="text-[#f4f3ef]">{form.fullName}</strong>. Your session for <strong className="text-[#c59b63]">{selectedService.title}</strong> on <strong className="text-[#f4f3ef]">{form.date}</strong> at <strong className="text-[#f4f3ef]">{form.timeSlot}</strong> has been logged.
            </p>

            <div className="bg-[#181820] border border-white/[0.08] p-4 rounded-xs text-left mb-6 space-y-2 text-xs">
              <div className="flex justify-between text-[#8f8e89]">
                <span>Service:</span>
                <span className="text-[#f4f3ef]">{selectedService.title}</span>
              </div>
              <div className="flex justify-between text-[#8f8e89]">
                <span>Investment:</span>
                <span className="text-[#c59b63] font-mono">${selectedService.price}</span>
              </div>
              <div className="flex justify-between text-[#8f8e89]">
                <span>Studio Location:</span>
                <span className="text-[#f4f3ef]">{SALON_INFO.address}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-[#25D366] text-black hover:bg-[#3ce07c] transition-colors rounded-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="py-3.5 px-5 text-xs font-medium uppercase tracking-[0.16em] border border-white/20 text-[#f4f3ef] hover:border-white/40 transition-colors rounded-xs"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <div>
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#c59b63] font-mono block mb-1">
                Direct Atelier Booking
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#f4f3ef]">
                Reserve Your Chair
              </h3>
              <p className="text-xs text-[#9e9d98] mt-1">
                Select your preferred ritual and time. Our concierge will secure your station.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#7e7d78] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    placeholder="e.g. Julian Vance"
                    className="w-full bg-[#16161c] border border-white/10 rounded-xs pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#f4f3ef] placeholder-[#666560] focus:outline-none focus:border-[#c59b63] transition-colors"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                  WhatsApp / Phone *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#7e7d78] absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+1 555 0192 / +92 300..."
                    className="w-full bg-[#16161c] border border-white/10 rounded-xs pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#f4f3ef] placeholder-[#666560] focus:outline-none focus:border-[#c59b63] transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                  Selected Grooming Ritual
                </label>
                <select
                  value={form.serviceId}
                  onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
                  className="w-full bg-[#16161c] border border-white/10 rounded-xs px-3.5 py-2.5 text-xs sm:text-sm text-[#f4f3ef] focus:outline-none focus:border-[#c59b63] transition-colors"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#121217]">
                      {s.title} — ${s.price} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full bg-[#16161c] border border-white/10 rounded-xs px-3.5 py-2.5 text-xs text-[#f4f3ef] focus:outline-none focus:border-[#c59b63] transition-colors [color-scheme:dark]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                    Time Window
                  </label>
                  <select
                    value={form.timeSlot}
                    onChange={(e) => setForm({ ...form, timeSlot: e.target.value })}
                    className="w-full bg-[#16161c] border border-white/10 rounded-xs px-3.5 py-2.5 text-xs text-[#f4f3ef] focus:outline-none focus:border-[#c59b63] transition-colors"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot} className="bg-[#121217]">
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#cfcec9] mb-1.5">
                  Specific Requests (Optional)
                </label>
                <input
                  type="text"
                  value={form.specialRequests}
                  onChange={(e) => setForm({ ...form, specialRequests: e.target.value })}
                  placeholder="e.g. Master barber preference, espresso upon arrival"
                  className="w-full bg-[#16161c] border border-white/10 rounded-xs px-3.5 py-2 text-xs text-[#f4f3ef] placeholder-[#666560] focus:outline-none focus:border-[#c59b63] transition-colors"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3.5 px-6 text-xs font-semibold uppercase tracking-[0.2em] bg-[#c59b63] text-[#09090c] hover:bg-[#dfbe8d] transition-colors rounded-xs shadow-md"
                >
                  Confirm Reservation
                </button>
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="py-3.5 px-4 text-xs font-semibold uppercase tracking-[0.16em] bg-[#25D366]/15 text-[#25D366] hover:bg-[#25D366]/25 border border-[#25D366]/40 transition-colors rounded-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
