import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar'; // Import the Navbar component

const ServicesPage = () => {
  // State for animation controls
  const [activeSection, setActiveSection] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Services data
  const services = [
    {
      id: "prayas",
      title: "Prayas (1st Year)",
      description: "Prayas introduces first-year students to social service through basic community interaction, awareness drives, and campus cleanliness initiatives. The focus is on building sensitivity toward societal issues and instilling discipline and teamwork. Volunteers learn the value of small efforts and consistent actions in making a meaningful difference in society.",
      image: "/units/prayas.png",
      color: "from-purple-500/80 to-indigo-600/80"
    },
    {
      id: "sahyog",
      title: "Sahyog (2nd Year)",
      description: "Sahyog emphasizes collaboration and coordination of 2nd year Students. These Volunteers engage in organizing events, conducting surveys and executing awareness campaigns. This stage connects them with communities through education drives, plantation activities, and health awareness camps. It enhances their communication and planning skills while nurturing empathy and responsibility toward various social and environmental challenges.",
      image: "/units/sahyog.png",
      color: "from-blue-500/80 to-cyan-600/80"
    },
    {
      id: "sanskar",
      title: "Sanskar (3rd Year)",
      description: "Sanskar aims to instill strong moral values and ethical conduct among volunteers. Through cultural activities, discussions, and awareness sessions, it shapes their character, encouraging them to become responsible citizens with a deep sense of integrity and social consciousness.",
      image: "/units/sanskar.png",
      color: "from-emerald-500/80 to-teal-600/80"
    },
    {
      id: "sahaj",
      title: "Sahaj (3rd Year)",
      description: "Sahaj focuses on promoting inner peace and mental well-being. Volunteers engage in yoga, meditation, and mindfulness practices, learning to lead a balanced life. It emphasizes simplicity, harmony, and emotional strength as key pillars of effective community service.",
      image: "/units/sehaj.png",
      color: "from-orange-400/80 to-amber-600/80"
    },
    {
      id: "seva",
      title: "Seva (3rd Year)",
      description: "Seva is centered around active volunteering and hands-on service. Volunteers teach underprivileged children, organize cleanliness drives, and conduct blood donation camps. This unit fosters compassion, leadership, and a genuine commitment to improving lives through dedicated community involvement.",
      image: "/units/seva.png",
      color: "from-red-500/80 to-rose-600/80"
    },
    {
      id: "nirbhay",
      title: "Nirbhay (4th Year)",
      description: "Nirbhay embodies fearless leadership. Final-year volunteers lead and mentor juniors, manage large-scale events, and represent NSS at inter-college platforms. They handle responsibility, guide social projects, and ensure the sustainability of initiatives. Nirbhay is the stage of transformation, where confidence meets compassion to shape responsible citizens and future changemakers.",
      image: "/units/nirbhay.png",
      color: "from-yellow-400/80 to-amber-500/80"
    }
  ];

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setIsLoaded(true), 300);

    // Set up intersection observer for detecting active sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    // Observe each section
    document.querySelectorAll('.service-section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar /> {/* Include the Navbar component */}
      <div className="bg-white pt-24 pb-16">
        {/* Page Header */}
        <motion.div 
          className="container mx-auto px-4 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">NSS Service Units</h1>
          <div className="flex justify-center mb-6">
            <div className="h-1 w-24 bg-yellow-500 rounded"></div>
          </div>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Dedicated to the principles of social responsibility and community development through our six progressive service units.
          </p>
        </motion.div>

        {/* Service Sections */}
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              className="service-section relative mb-24 md:mb-32 last:mb-8"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Direction alternates for each section */}
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                
                {/* Image Container with rotating border effect */}
                <motion.div 
                  className="w-full md:w-1/2 mb-8 md:mb-0 relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-lg -m-2 opacity-80`}
                    animate={{ 
                      rotate: [0, 1, 0, -1, 0],
                      scale: [1, 1.02, 1, 1.02, 1] 
                    }}
                    transition={{ 
                      duration: 8, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                  />
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <div className="aspect-w-16 aspect-h-9">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                    {/* Transparent gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-40`}></div>
                  </div>
                </motion.div>
                
                {/* Content Container */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={activeSection === service.id ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="inline-block">
                      <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">{service.title}</h2>
                      <motion.div 
                        className="h-1 w-16 bg-yellow-500 rounded mb-6"
                        initial={{ width: 0 }}
                        animate={activeSection === service.id ? { width: 64 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <motion.button
                      className={`px-6 py-3 bg-gradient-to-r ${service.color} text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Learn More
                    </motion.button>
                  </motion.div>
                </div>
              </div>
              
              {/* Connector lines between sections (except last) */}
              {index < services.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full">
                  <svg width="24" height="80" viewBox="0 0 24 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                      d="M12 0V72M12 72L4 64M12 72L20 64" 
                      stroke="rgba(79, 70, 229, 0.3)" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action */}
        <motion.div 
          className="container mx-auto px-4 mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-blue-500/90 to-indigo-600/90 rounded-xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join Our Service Community</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Be a part of our initiatives and help create meaningful impact in communities across the nation.
            </p>
            <motion.button
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-md shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Volunteer Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServicesPage;