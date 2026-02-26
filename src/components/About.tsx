import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, MapPin, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://i.postimg.cc/HWR6pqks/Chat-GPT-Image-Feb-26-2026-11-49-44-AM.png"
              alt="Comfortable Room"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
            <img
              src="https://i.postimg.cc/2SzkKZY1/Chat-GPT-Image-Feb-26-2026-11-38-44-AM.png"
              alt="Common Area"
              className="rounded-2xl shadow-lg w-full h-64 object-cover mt-8"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              About SKVS PG
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Welcome to SKVS PG, where comfort meets convenience. Located in the heart of Greater Noida, we provide a safe, hygienic, and premium living experience for students and working professionals.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our prime location near Gate Number 1, Alpha 1, ensures you are close to major educational institutions, corporate hubs, and markets, making your daily commute hassle-free.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Ideal for Everyone</h3>
                  <p className="text-slate-600">Perfect environment for both students and working professionals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Prime Location</h3>
                  <p className="text-slate-600">Located at A-7, Near Gate No. 1, Alpha 1, Greater Noida.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-900">Secure & Safe</h3>
                  <p className="text-slate-600">24/7 Security, CCTV surveillance, and secure entry.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
