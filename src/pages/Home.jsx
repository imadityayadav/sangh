import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import UpcomingEvents from "../components/UpcomingEvents";
import { div } from "framer-motion/client";
import WhatWeDo from "../components/WhatWeDo";
import PublicationSection from "../components/PublicationSection";

const HomePage = () => {
  // Sample carousel images - replace with your actual images
  const carouselImages = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual navigation - with explicit state updates
  const goToNextSlide = () => {
    const nextIndex = currentImageIndex === carouselImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
  };

  // Function to directly set slide
  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  // Debug the current index
  console.log("Current slide index:", currentImageIndex);

  return (
    <div>
      <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Background */}
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img 
            src={image} 
            alt={`Slide ${index + 1}`} 
            className="w-full h-full object-cover"
          />
          {/* Reduced opacity overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      ))}

      {/* Carousel Controls - Increased size and z-index */}
      {/* <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-30 hover:bg-opacity-70 cursor-pointer"
        onClick={goToPrevSlide}
        type="button"
        aria-label="Previous slide"
      >
        &#10094;
      </button>
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full z-30 hover:bg-opacity-70 cursor-pointer"
        onClick={goToNextSlide}
        type="button"
        aria-label="Next slide"
      >
        &#10095;
      </button> */}

      {/* Navbar */}
     <Navbar/>

      {/* Hero Section with Text Overlay */}
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 z-10">
        <h1 className="text-3xl lg:text-6xl  font-bold drop-shadow-lg">
        WELCOME TO SHANKH
        </h1>
        <p className="mt-4 text-xl lg:text-2xl max-w-2xl drop-shadow-md">
        Exploring Hindu Academia, Narratives, and Heritage
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg shadow-lg transition duration-300">
          Contact Us
        </button>
      </div>

      {/* Carousel Indicators - Increased size */}
      {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3 z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? "bg-white" : "bg-gray-400 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div> */}

      
    </div>
    <UpcomingEvents/>
    <WhatWeDo/>
    <PublicationSection/>
    </div>
  );
};

export default HomePage;