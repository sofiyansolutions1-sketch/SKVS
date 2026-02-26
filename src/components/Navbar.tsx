import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-900 tracking-tight">
              SKVS <span className="text-blue-600">PG</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+919818410792"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Phone size={16} className="mr-2" />
              9818410792
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 flex flex-col space-y-2 px-3">
              <a
                href="tel:+919818410792"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <Phone size={18} className="mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/919818410792"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-500 hover:bg-green-600"
              >
                <MessageCircle size={18} className="mr-2" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
