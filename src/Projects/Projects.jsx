import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Projects = () => {
  // Sample project data - replace with your actual project information
  const projects = [
    {
      id: 1,
      title: "Healthcare Management Platform",
      image: "/api/placeholder/600/400",
      description: "A comprehensive healthcare management system for hospitals to streamline patient records, appointments, and billing processes.",
      client: "National Healthcare Services",
      duration: "12 months"
    },
    {
      id: 2,
      title: "Healthcare Management Platform",
      image: "/api/placeholder/600/400",
      description: "A comprehensive healthcare management system for hospitals to streamline patient records, appointments, and billing processes.",
      client: "National Healthcare Services",
      duration: "12 months"
    },
    {
      id: 3,
      title: "Healthcare Management Platform",
      image: "/api/placeholder/600/400",
      description: "A comprehensive healthcare management system for hospitals to streamline patient records, appointments, and billing processes.",
      client: "National Healthcare Services",
      duration: "12 months"
    },
    {
      id: 4,
      title: "Healthcare Management Platform",
      image: "/api/placeholder/600/400",
      description: "A comprehensive healthcare management system for hospitals to streamline patient records, appointments, and billing processes.",
      client: "National Healthcare Services",
      duration: "12 months"
    },
    {
      id: 5,
      title: "AI-Powered Content Analyzer",
      image: "/api/placeholder/600/400",
      description: "A content analysis tool using NLP to evaluate sentiment, readability, and engagement metrics for marketing teams.",
      client: "Digital Marketing Associates",
      duration: "5 months"
    },
    {
      id: 6,
      title: "Blockchain Supply Chain Tracker",
      image: "/api/placeholder/600/400",
      description: "A blockchain-based solution for tracking product authenticity and supply chain transparency from manufacturer to consumer.",
      client: "Global Logistics Corporation",
      duration: "7 months"
    },
    {
      id: 7,
      title: "Virtual Reality Training Simulator",
      image: "/api/placeholder/600/400",
      description: "An immersive VR training platform for industrial workers to practice complex procedures in a safe, virtual environment.",
      client: "Industrial Safety Solutions",
      duration: "9 months"
    },
    {
      id: 8,
      title: "Sustainable Energy Dashboard",
      image: "/api/placeholder/600/400",
      description: "A real-time analytics dashboard monitoring renewable energy production, consumption patterns, and carbon footprint reduction.",
      client: "Green Energy Consortium",
      duration: "5 months"
    }
  ];

  // State for active project details
  const [activeProject, setActiveProject] = useState(null);
  // State for filter category
  const [filterCategory, setFilterCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = filterCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === filterCategory);

  return (
    <div>
        <Navbar/>
    <div className=" text-white p-6 pt-40">
        

      {/* Header Section */}
      <header className="max-w-6xl mx-auto mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-blue-500">
          Our Featured Projects
        </h1>
        <p className="text-xl text-black mb-8 max-w-3xl mx-auto">
          Explore our portfolio of innovative solutions across various industries and technologies.
          Each project represents our commitment to excellence and cutting-edge development.
        </p>
        
        {/* Category Filter */}
        
      </header>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-900/30 transition-all duration-300 hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute top-0 right-0 p-2 bg-slate-900/80 rounded-bl-lg">
                <span className="text-xs font-medium text-blue-400">{project.category}</span>
              </div>
            </div>
            
            {/* Project Info */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-blue-500 mb-2">{project.title}</h3>
              <p className="text-black text-sm mb-4 line-clamp-2">
                {project.description}
              </p>
              
              
              
              {/* Action Button */}
              
            </div>
            
            {/* Expanded Details Panel */}
            {activeProject === project.id && (
              <div className="p-5 bg-slate-900 border-t border-slate-700">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400">Client</p>
                    <p className="text-blue-300 font-medium">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Duration</p>
                    <p className="text-blue-300 font-medium">{project.duration}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-slate-400 mb-1">Full Description</p>
                  <p className="text-slate-300">{project.description}</p>
                </div>
                <div className="mt-4">
                  <p className="text-slate-400 mb-1">All Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Projects;