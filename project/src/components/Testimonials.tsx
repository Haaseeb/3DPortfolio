import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Haseeb's architectural visualizations are incredibly detailed and realistic. His work helped us secure multiple project approvals.",
    author: "Sarah Ahmed",
    position: "Senior Architect",
    company: "Design Studios International",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "The quality of renders exceeded our expectations. Haseeb has an excellent eye for lighting and materials.",
    author: "Muhammad Ali",
    position: "Project Manager",
    company: "Urban Developers",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "Professional, timely, and highly skilled. The 3D visualizations perfectly captured our design intent.",
    author: "Fatima Khan",
    position: "Interior Designer",
    company: "Spaces & Beyond",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "Outstanding work on our commercial project. Haseeb's attention to detail is remarkable.",
    author: "Hassan Malik",
    position: "CEO",
    company: "Architectural Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80"
  },
  {
    quote: "Exceptional talent in architectural visualization. The renders were crucial in our client presentations.",
    author: "Zainab Abbas",
    position: "Design Director",
    company: "Creative Architects",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="relative max-w-4xl mx-auto">
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronLeft size={24} />
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  {...testimonial}
                  className="w-full flex-shrink-0"
                />
              ))}
            </div>
          </div>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  author,
  position,
  company,
  image,
  className = ''
}: {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  className?: string;
}) {
  return (
    <div className={`bg-gray-50 p-8 rounded-lg relative ${className}`}>
      <Quote className="text-gray-300 absolute top-4 left-4" size={24} />
      <div className="pt-6">
        <p className="text-gray-700 mb-6 text-lg">{quote}</p>
        <div className="flex items-center">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{author}</h4>
            <p className="text-sm text-gray-600">
              {position} at {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}