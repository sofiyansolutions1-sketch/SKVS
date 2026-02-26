import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/LXhMMtQh/Chat-GPT-Image-Feb-26-2026-11-38-32-AM.png"
          alt="Modern PG Hostel Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-100 text-sm font-medium mb-6 backdrop-blur-sm">
            <MapPin size={14} className="mr-1" />
            Alpha 1, Greater Noida
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Comfortable & Secure Living at <span className="text-blue-400">SKVS PG</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
            Your perfect stay in Greater Noida. Experience premium facilities, 24/7 security, and a homely environment designed for students and working professionals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="tel:+919818410792"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
            >
              <Phone size={20} className="mr-2" />
              Call Now
            </a>
            <a
              href="https://wa.me/919818410792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-green-500 hover:bg-green-600 transition-all shadow-lg hover:shadow-green-500/30"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
