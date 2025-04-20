import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 2000);
    setEmail('');
  };

  return (
    <footer className="bg-indigo-950 text-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="mb-3">
              <h2 className="text-2xl font-bold text-white">NSS NIT Kurukshetra</h2>
              <div className="h-1 w-16 bg-blue-500 mt-2"></div>
            </div>
            
            <div className="text-gray-300 italic">
              <p>एकता में अनेकता को लिए चलते हैं हम धारणा</p>
              <p>निः​स्वार्थ सबकी सेवा करना कर्तव्य है हमारा ।</p>
              <p>रुकेंगे न कभी करते जाएंगे यह कर्म,</p>
              <p>एनएसएस एनआईटी कुरुक्षेत्र का यही है धर्म।।</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>NSS Office, NIT Kkr Haryana, 136118</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>nss@nitkkr.ac.in</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className={`flex items-center justify-center w-10 h-10 rounded-md ${
                    social === 'twitter' ? 'bg-blue-400' : 
                    social === 'facebook' ? 'bg-blue-600' : 
                    social === 'linkedin' ? 'bg-blue-700' : 
                    'bg-pink-600'
                  }`}
                >
                  <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {social === 'twitter' && <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.899a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>}
                    {social === 'facebook' && <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>}
                    {social === 'linkedin' && <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>}
                    {social === 'instagram' && <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>}
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">QUICK LINKS</h3>
              <ul className="space-y-2">
                {['Home', 'About Us', 'Our Services', 'Meet The Team', 'Contact Us'].map((link) => (
                  <li key={link} className="hover:text-blue-400 transition-colors">
                    <a href="#" className="inline-flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">NEWSLETTER</h3>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email Address" 
                    className="px-4 py-3 bg-white text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <motion.button
                    type="submit"
                    className={`px-4 py-3 rounded-md font-bold ${
                      isSubmitted ? 'bg-green-500' : 'bg-blue-500 hover:bg-blue-600'
                    } transition-colors duration-300`}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitted ? 'THANK YOU!' : 'SIGN UP'}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} NSS NIT Kurukshetra. All rights reserved.</p>
          <p className="mt-1">Designed with ❤️ by Isha Gahlawat , P.G.Siddharth , V.M.Karthik and M.Uma Maheshwar Rao</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
