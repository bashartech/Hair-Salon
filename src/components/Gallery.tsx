import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/barbershopData';
import { GalleryPhoto } from '../types';

export const Gallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedPhoto(filteredItems[nextIndex]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedPhoto) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedPhoto(filteredItems[prevIndex]);
  };

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#0c0c10] border-t border-white/[0.05] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#c59b63]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#c59b63] font-medium">
                THE ATELIER ARCHIVE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#f4f3ef] leading-[1.08]">
              Selected Works & <br />
              <span className="italic font-serif text-[#c59b63]">Sanctuary Spaces.</span>
            </h2>
          </div>

          {/* Filter Categories */}
          <div className="flex items-center gap-1.5 p-1 bg-[#121217] border border-white/[0.08] rounded-sm">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'all' ? 'bg-[#c59b63] text-[#09090c] font-semibold' : 'text-[#8e8d88] hover:text-[#f4f3ef]'
              }`}
            >
              All Works
            </button>
            <button
              onClick={() => setActiveTab('cuts')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'cuts' ? 'bg-[#c59b63] text-[#09090c] font-semibold' : 'text-[#8e8d88] hover:text-[#f4f3ef]'
              }`}
            >
              Precision Cuts
            </button>
            <button
              onClick={() => setActiveTab('beard')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'beard' ? 'bg-[#c59b63] text-[#09090c] font-semibold' : 'text-[#8e8d88] hover:text-[#f4f3ef]'
              }`}
            >
              Beard Artistry
            </button>
            <button
              onClick={() => setActiveTab('atelier')}
              className={`px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium transition-all ${
                activeTab === 'atelier' ? 'bg-[#c59b63] text-[#09090c] font-semibold' : 'text-[#8e8d88] hover:text-[#f4f3ef]'
              }`}
            >
              Atelier Interior
            </button>
          </div>
        </div>

        {/* Editorial Masonry/Asymmetric Layout */}
        <div className="grid grid-cols-12 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className={`${item.span || 'col-span-12 md:col-span-6'} group relative h-80 md:h-96 overflow-hidden rounded-sm border border-white/[0.07] cursor-pointer shadow-lg`}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              {/* Dark Hover Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090c]/90 via-[#09090c]/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Tag & Title Reveal */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between transition-transform duration-300">
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#c59b63] block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-[#f4f3ef] font-light leading-snug">
                    {item.title}
                  </h4>
                </div>

                <div className="w-10 h-10 rounded-full border border-white/20 glass-panel flex items-center justify-center text-white/80 group-hover:border-[#c59b63] group-hover:text-[#c59b63] transition-colors shrink-0 ml-4">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-[#09090c]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 text-white/70 hover:text-[#c59b63] glass-panel rounded-full transition-colors z-50"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-[#c59b63] glass-panel rounded-full transition-colors z-50 hidden sm:block"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-[#c59b63] glass-panel rounded-full transition-colors z-50 hidden sm:block"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="mt-4 text-center">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#c59b63] block font-mono">
                {selectedPhoto.tag}
              </span>
              <h3 className="font-serif text-2xl text-[#f4f3ef] font-light mt-1">
                {selectedPhoto.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
