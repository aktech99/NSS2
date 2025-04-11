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
      <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-2xl mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <motion.span 
            className="inline-block text-blue-400 font-semibold text-lg uppercase tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome to
          </motion.span>
        </motion.div>
        
        <motion.h1 
          className="text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <span className="text-blue-500">National Service Scheme</span>
        </motion.h1>
        
        <motion.div
          className="w-24 h-1 bg-blue-400 mb-6"
          initial={{ width: 0 }}
          animate={isLoaded ? { width: 96 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />
        
        <motion.p 
          className="text-xl text-gray-200 leading-relaxed max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
           "Not Me, But You" – Committed to social service, community engagement, and nation-building through dedicated volunteerism.
        </motion.p>
        
        <motion.div
          className="flex space-x-4 mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        >
          <button onClick={()=>{navigate("/teams");
            localStorage.setItem("activePage", "teams")
          }} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300 shadow-lg">
            Explore Programs
          </button>
          <button className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium rounded-md transition-colors duration-300">
            Virtual Tour
          </button>
        </motion.div>
        
        {/* Social proof or key stats */}
        <motion.div 
          className="flex space-x-8 mt-16"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div>
            <p className="text-4xl font-bold text-blue-400">95%</p>
            <p className="text-gray-300">Graduate Employment</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">30+</p>
            <p className="text-gray-300">Degree Programs</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-400">1965</p>
            <p className="text-gray-300">Established</p>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 0.7 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <p className="text-white text-sm mb-2">Scroll to discover</p>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-1"
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