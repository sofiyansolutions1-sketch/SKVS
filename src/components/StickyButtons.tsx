import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function StickyButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-8">
      <a
        href="https://wa.me/919818410792"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a
        href="tel:+919818410792"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
