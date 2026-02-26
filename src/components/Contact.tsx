import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    // For now, we'll construct a WhatsApp message
    const text = `Hi, I am interested in SKVS PG.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/919818410792?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions? Ready to book? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <a href="tel:+919818410792" className="flex items-center group">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">Call Us</p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      +91 9818410792
                    </p>
                  </div>
                </a>

                <a href="https://wa.me/919818410792" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white group-hover:bg-green-600 transition-colors">
                    <MessageCircle size={20} className="lucide-message-circle" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-slate-500 font-medium uppercase tracking-wide">WhatsApp</p>
                    <p className="text-xl font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      Chat Now
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Why Choose SKVS?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Professional Management
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Hygienic Environment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Student Friendly Community
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Affordable Rates
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                  placeholder="I am interested in a room..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-600/30"
              >
                <Send size={20} className="mr-2" />
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper component for the icon
function MessageCircle({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
