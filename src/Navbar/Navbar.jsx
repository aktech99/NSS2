import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(() => {
    return localStorage.getItem("activePage") || "home";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Units" }, // Added Services tab
    { id: "teams", label: "NSS Manual" },
    { id: "projects", label: "Projects" },
  ];
  
  useEffect(() => {
    localStorage.setItem("activePage", activePage);
  }, [activePage]);
  
  const handleNavClick = (pageId) => {
    if (pageId === "teams") {
      // Open PDF in new tab
      window.open("/pdfs/nssmanual.pdf", "_blank");
      return;
    }
  
    if (pageId === "home") {
      navigate("/");
    } else {
      navigate("/" + pageId);
    }
  
    setActivePage(pageId);
    setIsMenuOpen(false); // Close mobile menu after click
  };
  
  
  return (
    <nav className="bg-white shadow-md w-full px-4 sm:px-6 py-4 fixed z-20">
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <div className="h-12 flex items-center">
            <img
              src="/Logo_WHite_1.png"
              alt="Logo"
              className="h-12 w-auto mr-2"
            />
            <div className="hidden sm:block text-sm md:text-base">
              National Service Scheme
              <br />
              Kurukshetra
            </div>
          </div>
        </div>
        
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation in the center for desktop */}
        <div className="hidden sm:flex flex-grow justify-center md:ml-[-140px]">
          <div className="relative flex space-x-4 md:space-x-8">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <button
                  className={`px-3 py-2 text-sm font-medium ${
                    activePage === item.id
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-gray-900"
                  } transition-colors duration-300`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </button>
                {/* Animated indicator bar */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: activePage === item.id ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Empty div to balance the layout */}
        <div className="hidden sm:block flex-shrink-0 w-32" />
      </div>
      
      {/* Mobile menu (slide down) */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
          className="sm:hidden mt-2"
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-4 py-2 text-left ${
                  activePage === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } transition-colors duration-300`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;