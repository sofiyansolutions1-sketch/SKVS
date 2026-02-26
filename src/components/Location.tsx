import React from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Prime Location
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Located in the heart of Greater Noida, easily accessible and close to everything you need.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Address Info */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-blue-900 text-white">
              <div className="flex items-start mb-6">
                <MapPin className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">SKVS PG</h3>
                  <p className="text-blue-100 leading-relaxed">
                    A-7, Near Gate Number 1,<br />
                    Alpha 1, Block A,<br />
                    Alpha I, Greater Noida,<br />
                    Uttar Pradesh 201310
                  </p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-blue-800">
                <h4 className="font-semibold text-blue-300 mb-3">Nearby Landmarks:</h4>
                <ul className="space-y-2 text-blue-100 text-sm">
                  <li>• Near Gate No. 1, Alpha 1</li>
                  <li>• Walking distance to local market</li>
                  <li>• Close to Metro Station</li>
                  <li>• Near major colleges and offices</li>
                </ul>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 h-96 lg:h-auto min-h-[400px]">
              <iframe
                title="SKVS PG Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.667749646704!2d77.5126!3d28.4601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjQiTiA3N8KwMzAnNDUuNCJF!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
