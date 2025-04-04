import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Factory } from 'lucide-react';
import { Statistic } from '../types';

const statistics: Statistic[] = [
  { value: '50K+', label: 'Daily Production' },
  { value: '1000+', label: 'Skilled Workers' },
  { value: '200K', label: 'Sq. Ft. Facility' },
  { value: '50+', label: 'Global Brands' },
];

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80"
          alt="Factory background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Manufacturing Excellence
            <span className="text-blue-600 dark:text-blue-400"> Redefined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration:  0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            Your trusted partner in high-quality garment manufacturing, serving global brands with precision and innovation.
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#factory-tour')}
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold flex items-center space-x-2 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
            >
              Take a Tour
              <Factory className="ml-2 h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;