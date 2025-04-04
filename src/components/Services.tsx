import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Scissors, Shield, Truck } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    title: 'Bulk Production',
    description: 'High-volume manufacturing capabilities with consistent quality and timely delivery.',
    icon: <Factory className="h-12 w-12" />,
  },
  {
    title: 'Custom Manufacturing',
    description: 'Tailored production solutions to meet your specific design and material requirements.',
    icon: <Scissors className="h-12 w-12" />,
  },
  {
    title: 'Quality Control',
    description: 'Rigorous quality assurance at every stage of the manufacturing process.',
    icon: <Shield className="h-12 w-12" />,
  },
  {
    title: 'Global Logistics',
    description: 'Efficient worldwide distribution network ensuring timely delivery to any location.',
    icon: <Truck className="h-12 w-12" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive manufacturing solutions tailored to meet your production needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our manufacturing expertise can bring your designs to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;