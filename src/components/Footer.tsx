import React from 'react';
import { Facebook, Twitter, Linkedin as LinkedIn, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">FashionTech</h3>
            <p className="text-gray-400">
              Leading manufacturer of high-quality garments for global brands.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About Us', 'Services', 'Factory Tour', 'Portfolio'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(`#${link.toLowerCase().replace(' ', '-')}`)}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Bulk Production',
                'Custom Manufacturing',
                'Quality Control',
                'Global Logistics',
              ].map((service) => (
                <li key={service}>
                  <button
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FashionTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;