import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              SKVS <span className="text-blue-500">PG</span>
            </h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Premium paying guest accommodation in Greater Noida. Safe, secure, and comfortable living for students and professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-blue-400 transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-blue-400 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-500 font-medium mr-2">Address:</span>
                <span>A-7, Near Gate Number 1, Alpha 1, Greater Noida, UP 201310</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 font-medium mr-2">Phone:</span>
                <a href="tel:+919818410792" className="hover:text-white transition-colors">+91 9818410792</a>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 font-medium mr-2">Email:</span>
                <a href="mailto:info@skvspg.com" className="hover:text-white transition-colors">info@skvspg.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SKVS PG. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
