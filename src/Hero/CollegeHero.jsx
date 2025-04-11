import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CollegeHero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading time or trigger animation after content loads
    setTimeout(() => setIsLoaded(true), 300);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background image with subtle zoom effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img 
          src="/administrative_edit.jpg" 
          alt="College Campus"
          className="w-full h-full object-cover"
        />
        
        {/* Enhanced gradient overlay with deeper fade effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none" />
      </motion.div>
      
      {/* Text content container with staggered animations */}
      <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 md:px-16 max-w-full md:max-w-2xl mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-2 sm:mb-4"
        >
          <motion.span 
            className="inline-block text-blue-400 font-semibold text-base sm:text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome to
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-blue-500">National Service Scheme</span>
        </motion.h1>
        
        <motion.div
          className="w-16 sm:w-24 h-1 bg-blue-400 mb-4 sm:mb-6"
          initial={{ width: 0 }}
          animate={isLoaded ? { width: 64, transition: { duration: 1, delay: 0.6, ease: "easeOut" } } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-full sm:max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
           "Not Me, But You" – Committed to social service, community engagement, and nation-building through dedicated volunteerism.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button 
            onClick={() => {
              navigate("/teams");
              localStorage.setItem("activePage", "teams");
            }} 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg w-full sm:w-auto text-center"
          >
            Explore Programs
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-md transition-colors duration-300 w-full sm:w-auto text-center">
            Virtual Tour
          </button>
        </motion.div>
        
        {/* Social proof or key stats - Responsive grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-16"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400">95%</p>
            <p className="text-gray-300 text-sm sm:text-base">Graduate Employment</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400">30+</p>
            <p className="text-gray-300 text-sm sm:text-base">Degree Programs</p>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-3xl sm:text-4xl font-bold text-blue-400">1965</p>
            <p className="text-gray-300 text-sm sm:text-base">Established</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator - Hide on very small screens */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-white text-xs sm:text-sm mb-1 sm:mb-2">Scroll to discover</p>
        <motion.div 
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center pt-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CollegeHero;