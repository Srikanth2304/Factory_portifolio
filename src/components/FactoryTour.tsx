import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  'State-of-the-art machinery',
  'Advanced quality control systems',
  'Sustainable production practices',
  'Skilled workforce',
  'Modern facilities',
  'Safety protocols',
];

const FactoryTour: React.FC = () => {
  return (
    <section id="factory-tour" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Virtual Factory Tour
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience our state-of-the-art manufacturing facility from anywhere in the world.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
              alt="Modern factory floor"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              World-Class Manufacturing Facility
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our 200,000 sq. ft. facility is equipped with the latest technology and staffed by skilled professionals, ensuring the highest quality production standards.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80",
              title: "Production Floor",
              description: "Advanced machinery for efficient production"
            },
            {
              image: "https://images.unsplash.com/photo-1581092162384-8987c1d64926?auto=format&fit=crop&q=80",
              title: "Quality Control",
              description: "Rigorous testing and inspection processes"
            },
            {
              image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
              title: "Packaging Area",
              description: "Professional packaging and shipping preparation"
            }
          ].map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {area.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FactoryTour;