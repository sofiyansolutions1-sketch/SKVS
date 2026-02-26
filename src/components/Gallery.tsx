import React from 'react';
import { motion } from 'motion/react';

const images = [
  { src: 'https://i.postimg.cc/YSB9MqJL/Chat-GPT-Image-Feb-20-2026-03-45-05-PM.png', category: 'Bedroom' },
  { src: 'https://i.postimg.cc/YCZFgHTk/Chat-GPT-Image-Feb-26-2026-12-03-46-PM.png', category: 'Washroom' },
  { src: 'https://i.postimg.cc/qRCjnw1m/Chat-GPT-Image-Feb-26-2026-12-02-09-PM.png', category: 'Exterior' },
  { src: 'https://i.postimg.cc/bYH4FFwn/Chat-GPT-Image-Feb-8-2026-02-29-22-PM.png', category: 'Common Area' },
  { src: 'https://i.postimg.cc/sgNYcSQ6/Chat-GPT-Image-Feb-26-2026-12-04-49-PM.png', category: 'Bedroom' },
  { src: 'https://i.postimg.cc/J765nbTf/Chat-GPT-Image-Feb-6-2026-10-44-36-PM.png', category: 'Pantry' },
  { src: 'https://i.postimg.cc/bvkmSsGG/Chat-GPT-Image-Feb-4-2026-12-41-36-PM.png', category: 'Lobby' },
  { src: 'https://i.postimg.cc/2S6y2KhP/Chat-GPT-Image-Feb-26-2026-11-54-18-AM.png', category: 'Facilities' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Photo Gallery
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Take a look inside SKVS PG. Clean rooms, modern amenities, and a homely atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{img.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
