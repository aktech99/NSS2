import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Emma Rodriguez",
      role: "Marketing Director",
      company: "TechVision Inc.",
      image: "/api/placeholder/100/100",
      quote: "This platform completely transformed how our team collaborates. The intuitive interface made adoption seamless across all departments. We've seen a 40% increase in project completion rates since implementation."
    },
    {
      id: 2,
      name: "Michael Chang",
      role: "Senior Developer",
      company: "InnovateSoft",
      image: "/api/placeholder/100/100",
      quote: "As a developer, I appreciate the attention to technical details. The API documentation is comprehensive, and the support team genuinely understands developers' needs. It's rare to find both excellent UX and solid backend architecture."
    },
    {
      id: 3,
      name: "Sophia Washington",
      role: "CEO",
      company: "GrowthPath Ventures",
      image: "/api/placeholder/100/100",
      quote: "The ROI we've experienced has exceeded our expectations. Within just three months, we recouped our investment and started seeing tangible growth. I recommend this solution to every entrepreneur in my network."
    },
    {
      id: 4,
      name: "James Okonkwo",
      role: "Operations Manager",
      company: "GlobalSupply Co.",
      image: "/api/placeholder/100/100",
      quote: "Implementing this system has eliminated countless hours of manual work for our operations team. The automated workflows have reduced our processing time by 65% and practically eliminated human error."
    },
    {
      id: 5,
      name: "Aisha Patel",
      role: "Product Manager",
      company: "NexGen Solutions",
      image: "/api/placeholder/100/100",
      quote: "The customization options are what sold us. We were able to tailor the platform to our unique workflow without compromise. The learning curve was minimal, and now we couldn't imagine working without it."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeDot, setActiveDot] = useState(0);

  // Auto-rotation for testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % testimonials.length;
      setActiveDot(newIndex);
      return newIndex;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1;
      setActiveDot(newIndex);
      return newIndex;
    });
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    setActiveDot(index);
  };

  // Calculate which testimonials to show (featured + grid)
  const featuredTestimonial = testimonials[currentIndex];
  const gridTestimonials = testimonials.filter((_, index) => index !== currentIndex);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 pt-60 pb-60">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">What Our Clients Say</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">See how our solutions have helped organizations across industries achieve their goals and drive success.</p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-12 bg-white rounded-xl shadow-lg p-6 md:p-8 transition-all duration-500">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100">
                  <img src={featuredTestimonial.image} alt={featuredTestimonial.name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-blue-500 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 text-lg mb-4 italic">{featuredTestimonial.quote}</p>
              <div>
                <h4 className="font-bold text-gray-900">{featuredTestimonial.name}</h4>
                <p className="text-gray-600">{featuredTestimonial.role}, {featuredTestimonial.company}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mb-10">
          <button 
            onClick={prevTestimonial}
            className="mx-2 bg-white text-blue-500 hover:bg-blue-100 p-2 rounded-full shadow transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeDot === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-blue-300'
                }`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="mx-2 bg-white text-blue-500 hover:bg-blue-100 p-2 rounded-full shadow transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridTestimonials.slice(0, 4).map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => goToTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-gray-600 text-xs">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm line-clamp-3">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;