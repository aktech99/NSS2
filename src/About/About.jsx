import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const About = () => {
  // Sample images for the carousel
  const images = [
    "/api/placeholder/1200/600", // Replace with actual NSS activity images
    "/api/placeholder/1200/600",
    "/api/placeholder/1200/600",
    "/api/placeholder/1200/600",
    "/api/placeholder/1200/600"
  ];

  // State for the image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto scroll for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  // Team members data

  // Recent achievements
  const achievements = [
    "Plantation of 1000+ trees in neighboring villages",
    "Blood donation camp collecting 200+ units",
    "COVID-19 awareness campaign reaching 15+ communities",
    "Literacy program for 500+ underprivileged children",
    "Waste management initiative across 10 villages"
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      title: "Annual Blood Donation Camp",
      date: "April 15, 2025",
      location: "College Main Auditorium"
    },
    {
      title: "Rural Health Awareness Workshop",
      date: "May 2, 2025",
      location: "Ramnagar Village"
    },
    {
      title: "Environmental Conservation Drive",
      date: "May 22, 2025",
      location: "College Campus & Surroundings"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
        <Navbar/>
      {/* Hero Section with Image Carousel */}
      <div className="relative h-96 overflow-hidden">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img 
              src={image} 
              alt={`NSS Activity ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        {/* Overlay with NSS Title */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
          <h1 className="text-5xl font-bold mb-4 text-center">National Service Scheme</h1>
          <p className="text-xl max-w-3xl text-center">Not Me But You</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* About NSS Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-700 pb-2">About NSS at Our College</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 text-gray-700">
              <p className="mb-4 text-lg">
                The National Service Scheme (NSS) unit at our college was established in 1972 with the primary objective of developing the personality and character of student youth through voluntary community service. The program aims to identify the needs and problems of the community and involve students in solving them.
              </p>
              <p className="mb-4 text-lg">
                Our NSS unit has been consistently recognized at the state and national levels for its outstanding contributions to social service. With over 200 active volunteers, we organize various activities throughout the year focusing on education, health, environment, and social issues.
              </p>
              <p className="mb-4 text-lg">
                The NSS motto "Not Me But You" reflects the essence of democratic living and upholds the need for selfless service. NSS helps the students develop appreciation to other person's point of view and also show consideration towards other living beings.
              </p>
              <p className="text-lg">
                Our regular activities include organizing blood donation camps, tree plantation drives, cleanliness campaigns, awareness programs on various social issues, special camps in adopted villages, and disaster management training. Through these activities, our volunteers develop skills in democratic leadership, social harmony, and national integration.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">NSS Objectives</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Understand the community in which they work</li>
                <li>Identify the needs and problems of the community</li>
                <li>Develop among themselves a sense of social and civic responsibility</li>
                <li>Apply education in finding practical solutions to problems</li>
                <li>Develop competence required for group living and sharing</li>
                <li>Gain skills in mobilizing community participation</li>
                <li>Acquire leadership qualities and democratic attitudes</li>
                <li>Practice national integration and social harmony</li>
              </ul>
            </div>
          </div>
        </section>


        {/* Achievements and Upcoming Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recent Achievements */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Recent Achievements</h2>
            <ul className="space-y-3">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">{achievement}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Upcoming Events */}
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                  <h3 className="font-semibold text-lg text-gray-800">{event.title}</h3>
                  <p className="text-gray-600">{event.date}</p>
                  <p className="text-gray-500 text-sm">{event.location}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Join Us CTA */}
        <section className="mt-16 bg-blue-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Join the NSS Family</h2>
          <p className="text-lg mb-6 max-w-3xl mx-auto">
            Be the change you wish to see in the world. Join our NSS unit and contribute to building a better society through community service.
          </p>
          <button className="bg-white text-blue-700 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition-colors">
            Apply Now
          </button>
        </section>
      </div>

      {/* Footer */}
      <Footer/>
      

    </div>
  );
};

export default About;