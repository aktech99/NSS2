import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Section = () => {
  return (
    <section className="py-60 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="w-full h-full bg-blue-500 rounded-l-full"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5">
        <div className="w-full h-full bg-blue-800 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Heading with animation */}
            <div className="mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-baseline"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  WHO WE <span className="text-blue-500">ARE</span>
                </h2>
                <span className="text-5xl md:text-6xl text-blue-500 font-bold ml-2">?</span>
              </motion.div>
              
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-blue-500 mt-4"
              />
            </div>
            
            {/* Main content with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl font-semibold text-gray-700 mb-6">
                NSS NIT KURUKSHETRA CONSISTS OF HIGHLY MOTIVATED AND DEDICATED MEMBERS TOWARDS SERVING THE SOCIETY THUS CONTRIBUTING IN A BETTER TOMORROW.
              </p>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                We aim at providing all the basic social services so that the nation can have citizens which are indeed an asset. We believe that the true sense of nationalism can only be imbibed in youth by those who are keenly interested in giving back to society what they have gathered so far.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our members are dedicated towards nurturing of their underprivileged fellowmates. We work on a diverse range of social issues including blood donation camps, education drives, environment, cleanathons and more.
              </p>
            </motion.div>
            
            {/* Feature list with animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Perfect Planning",
                "Professional Approach",
                "First Working Process",
                "Dedicated Team Members",
                "Social Impact Focus",
                "Continuous Learning"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-md flex items-center space-x-2">
                <span>Learn More About Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </motion.div>
          </div>
          
          {/* Image side with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 md:h-full">
              {/* Main image */}
              <div className="rounded-lg overflow-hidden shadow-xl bg-white p-2 relative z-20">
                <img 
                  src="../../insteadofcycles.jpeg" 
                  alt="NSS Members on Bicycles" 
                  className="w-full h-64 md:h-80 object-cover rounded-md"
                />
                
                <div className="p-4 bg-white">
                  <p className="text-gray-800 font-medium">NSS volunteers during a community outreach <br></br> program</p>
                </div>
              </div>
              
              {/* Floating stats card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-10 -right-10 bg-blue-600 text-white p-6 rounded-lg shadow-lg z-30 hidden md:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-sm text-blue-100">Projects</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">200+</p>
                    <p className="text-sm text-blue-100">Volunteers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">15+</p>
                    <p className="text-sm text-blue-100">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold">10k+</p>
                    <p className="text-sm text-blue-100">Lives Impacted</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute w-40 h-40 border-4 border-blue-200 rounded-lg -top-6 -left-6 z-10"></div>
              <div className="absolute w-full h-full bg-gray-100 rounded-lg top-6 left-6 z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section;