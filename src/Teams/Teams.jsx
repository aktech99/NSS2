import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const InteractivePieChart = () => {
  const [activeSegment, setActiveSegment] = useState(null);
  
  // Data for the pie chart segments
  const segments = [
    { 
      id: 1, 
      title: "Environmental", 
      shortTitle: "Env",
      color: "#4CAF50", 
      image: "/api/placeholder/300/200", 
      description: "Eco-friendly initiatives focused on preserving our natural resources and promoting sustainable practices."
    },
    { 
      id: 2, 
      title: "Education", 
      shortTitle: "Edu",
      color: "#2196F3", 
      image: "/api/placeholder/300/200", 
      description: "Programs aimed at improving access to quality education and learning opportunities for underserved communities."
    },
    { 
      id: 3, 
      title: "Healthcare", 
      shortTitle: "Health",
      color: "#F44336", 
      image: "/api/placeholder/300/200", 
      description: "Medical outreach programs providing essential healthcare services to those in need."
    },
    { 
      id: 4, 
      title: "Food Security", 
      shortTitle: "Food",
      color: "#FF9800", 
      image: "/api/placeholder/300/200", 
      description: "Initiatives addressing hunger and ensuring communities have access to nutritious food."
    },
    { 
      id: 5, 
      title: "Housing", 
      shortTitle: "House",
      color: "#9C27B0", 
      image: "/api/placeholder/300/200", 
      description: "Projects focused on providing safe and affordable housing solutions to vulnerable populations."
    },
    { 
      id: 6, 
      title: "Clean Water", 
      shortTitle: "Water",
      color: "#00BCD4", 
      image: "/api/placeholder/300/200", 
      description: "Programs ensuring access to clean water and sanitation facilities in underserved regions."
    },
    { 
      id: 7, 
      title: "Youth Development", 
      shortTitle: "Youth",
      color: "#FFEB3B", 
      image: "/api/placeholder/300/200", 
      description: "Initiatives empowering young people through mentorship, skills training, and leadership opportunities."
    },
    { 
      id: 8, 
      title: "Community Building", 
      shortTitle: "Community",
      color: "#795548", 
      image: "/api/placeholder/300/200", 
      description: "Projects that strengthen community bonds and create spaces for connection and collaboration."
    },
    
  ];

  // Function to calculate the position of each segment
  const calculateSegmentProps = (index, total, active) => {
    const angle = (2 * Math.PI) / total;
    const startAngle = index * angle;
    const endAngle = startAngle + angle;
    const centerX = 300;
    const centerY = 300;
    const radius = active ? 190 : 180;
    
    // Calculate the coordinates for the segment path
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    // Calculate the midpoint angle for the label
    const midAngle = startAngle + angle / 2;
    
    // Position labels at different distances from center based on segment
    // This helps prevent overlapping by staggering the label positions
    const labelRadius = (index % 2 === 0) ? radius * 0.6 : radius * 0.75;
    
    const labelX = centerX + labelRadius * Math.cos(midAngle);
    const labelY = centerY + labelRadius * Math.sin(midAngle);
    
    // Calculate the path for the segment
    const largeArcFlag = angle > Math.PI ? 1 : 0;
    const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
    
    return { path, labelX, labelY, midAngle };
  };

  // Function to get contrasting text color based on background
  const getContrastColor = (hexColor) => {
    // Convert hex to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    
    // Calculate perceived brightness (YIQ formula)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#000000' : '#ffffff';
  };

  return (
    <div className="text-black">
      <Navbar />
      
      <div className="py-32 px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Our Impact Areas</h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-16">
          Explore our key focus areas by hovering over the segments below. Each represents a critical aspect of our work to create positive change in communities.
        </p>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Pie Chart */}
          <div className="relative w-[600px] h-[600px]">
            <svg width="600" height="600" viewBox="0 0 600 600">
              <defs>
                <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="0" stdDeviation="5" floodOpacity="0.3" />
                </filter>
              </defs>
              
              {segments.map((segment, index) => {
                const { path, labelX, labelY, midAngle } = calculateSegmentProps(
                  index, 
                  segments.length, 
                  activeSegment === segment.id
                );
                
                return (
                  <g key={segment.id}>
                    <path
                      d={path}
                      fill={segment.color}
                      stroke="white"
                      strokeWidth="2"
                      className="transition-all duration-300 cursor-pointer"
                      style={{
                        transform: activeSegment === segment.id ? `translateX(${8 * Math.cos(midAngle)}px) translateY(${8 * Math.sin(midAngle)}px)` : 'none',
                        filter: activeSegment === segment.id ? 'url(#dropShadow)' : 'none'
                      }}
                      onMouseEnter={() => setActiveSegment(segment.id)}
                      onMouseLeave={() => setActiveSegment(null)}
                    />
                    
                    {/* Use shorter titles for better fit */}
                    <text
                      x={labelX}
                      y={labelY}
                      textAnchor="middle"
                      dy=".3em"
                      className="text-xs font-bold pointer-events-none"
                      style={{
                        fill: getContrastColor(segment.color),
                        opacity: activeSegment === null || activeSegment === segment.id ? 1 : 0.7
                      }}
                    >
                      {segment.shortTitle}
                    </text>
                  </g>
                );
              })}
              
              {/* Center circle */}
              <circle cx="300" cy="300" r="80" fill="white" stroke="#e0e0e0" strokeWidth="2" />
              <text x="300" y="295" textAnchor="middle" className="text-xl font-bold fill-gray-800">
                Our
              </text>
              <text x="300" y="325" textAnchor="middle" className="text-xl font-bold fill-gray-800">
                Projects
              </text>
            </svg>
          </div>
          
          {/* Hover Info Card */}
          <div className="w-full max-w-md min-h-[400px] flex items-center justify-center">
            {activeSegment ? (
              <div className="bg-white rounded-lg shadow-xl p-6 w-full transition-all duration-300 transform scale-100 opacity-100">
                <h2 className="text-2xl font-bold mb-4" style={{ color: segments.find(s => s.id === activeSegment)?.color }}>
                  {segments.find(s => s.id === activeSegment)?.title}
                </h2>
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img
                    src={segments.find(s => s.id === activeSegment)?.image}
                    alt={segments.find(s => s.id === activeSegment)?.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <p className="text-gray-700">
                  {segments.find(s => s.id === activeSegment)?.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-6 w-full opacity-50 text-center">
                <p className="text-lg text-gray-500">Hover over a segment to see details</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

function Teams() {
  return (
    <div className="text-black">
      <InteractivePieChart />
    </div>
  );
}

export default Teams;