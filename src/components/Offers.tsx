import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, Gift } from 'lucide-react';

export default function Offers() {
  return (
    <section className="py-16 bg-blue-600 relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Gift className="text-yellow-300 w-8 h-8" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Limited Time Offer!
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book now and get a <span className="font-bold text-yellow-300">Special Discount</span> on your first month's stay. Early booking benefits available for students!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919818410792"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-blue-600 bg-white hover:bg-slate-100 transition-colors shadow-lg"
            >
              <Phone size={20} className="mr-2" />
              Call for Best Deal
            </a>
            <a
              href="https://wa.me/919818410792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-bold rounded-full text-white bg-green-500 hover:bg-green-600 transition-colors shadow-lg"
            >
              <MessageCircle size={20} className="mr-2" />
              WhatsApp Inquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
