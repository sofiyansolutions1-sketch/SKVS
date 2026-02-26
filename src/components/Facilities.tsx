import React from 'react';
import { motion } from 'motion/react';
import { Car, Zap, Droplets, Shield, Video, Sparkles, Flame, ArrowUpCircle } from 'lucide-react';

const facilities = [
  {
    icon: Car,
    title: 'Ample Parking',
    description: 'Secure parking space available for both cars and bikes.',
  },
  {
    icon: ArrowUpCircle,
    title: 'Lift / Elevator',
    description: 'Modern elevator for easy access to all floors.',
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description: '24x7 generator backup to ensure uninterrupted power.',
  },
  {
    icon: Droplets,
    title: '24x7 Water Supply',
    description: 'Continuous fresh water supply for all your needs.',
  },
  {
    icon: Shield,
    title: 'Security Guard',
    description: 'Professional security personnel available round the clock.',
  },
  {
    icon: Video,
    title: 'CCTV Surveillance',
    description: 'Full premise monitoring for your safety and peace of mind.',
  },
  {
    icon: Sparkles,
    title: 'Daily Cleaning',
    description: 'Regular cleaning of rooms and common areas.',
  },
  {
    icon: Flame,
    title: 'Fire Safety',
    description: 'Equipped with modern fire safety systems and extinguishers.',
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Premium Facilities
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide top-notch amenities to ensure your stay is comfortable, safe, and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 text-blue-600">
                <facility.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{facility.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{facility.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
