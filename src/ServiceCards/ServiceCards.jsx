import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCards = () => {

  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Community Cycling Program",
      description: "Join our initiative to promote sustainable transportation and community health. Our cycling programs engage local residents in regular group rides while raising awareness about environmental issues.",
      image: "/api/placeholder/400/320",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="5.5" cy="17.5" r="3.5"/>
          <circle cx="18.5" cy="17.5" r="3.5"/>
          <path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Free Health Check-up Camps",
      description: "We organize regular health camps providing essential medical services to underserved communities. Our team of volunteer healthcare professionals offers preventive care and early detection screenings.",
      image: "/api/placeholder/400/320",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.3 1.5 4.05 3 5.5l7 7 7-7z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Clean Water Initiative",
      description: "Our clean water projects focus on providing sustainable access to safe drinking water in rural areas. Through community partnerships, we install filtration systems and educate on water conservation practices.",
      image: "/api/placeholder/400/320",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          NOT FOR <span className="text-blue-400">ME</span> BUT FOR ALL
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="w-full md:w-80 bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div className="relative">
              <div className="h-56 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 bg-blue-500 w-14 h-14 rounded-full flex items-center justify-center shadow-md">
                <div className="text-white">
                  {card.icon}
                </div>
              </div>
            </div>
            
            <div className="px-6 pt-10 pb-6">
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-center mb-5 leading-relaxed">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Single Read More button for all cards */}
      <div className="mt-12 text-center">
        <button onClick={()=>{navigate('/projects');
            localStorage.setItem("activePage", "projects")
        }} className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all">
          Read More About Our Initiatives
        </button>
      </div>
    </div>
  );
};

export default ServiceCards;