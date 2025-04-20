import React from 'react';
import { useNavigate } from 'react-router-dom';

const ServiceCards = () => {

  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Mahaveer jayanthi",
      description: "“Mahavir Jayanti & Vaisakhi: NSS NIT Kurukshetra celebrated with cultural performances, promoting unity and service.”",
      image: "../../projects/mh.png",
      
    },
    {
      id: 2,
      title: "Black Day",
      description: "Black Day Commemoration: NSS and NCC units honored CRPF martyrs of the Pulwama attack with a tribute, patriotic speeches, and a marathon, promoting unity and patriotism.",
      image: "../../projects/blackday.png",
      
    },
    {
      id: 3,
      title: "7 Day Camp",
      description: "“NSS Camp in Sunheri Khalsa Village: A 7-day camp with educational programs, tree planting, health awareness, and cultural activities, fostering community development and empowerment.”",
      image: "../../projects/7d.png",
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          NOT <span className="text-blue-400">ME</span> BUT YOU
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
                <div className="text-white">
              
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