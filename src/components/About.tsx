import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About FashionTech
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Leading the future of garment manufacturing with innovation, sustainability, and excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To revolutionize garment manufacturing through cutting-edge technology and sustainable practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Award className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300">
              To be the global leader in innovative and sustainable garment manufacturing solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <Users className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Our Values</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Excellence, innovation, sustainability, and commitment to our clients' success.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2010, FashionTech has grown from a small local manufacturer to a global leader in garment production. Our commitment to innovation and quality has earned us partnerships with some of the world's most prestigious brands.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, we operate a state-of-the-art 200,000 sq. ft. facility, employing over 1,000 skilled workers and producing 50,000+ garments daily for more than 50 global brands.
              </p>
            </div>
            <div className="relative h-64 md:h-full min-h-[300px] rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80"
                alt="Modern factory interior"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;