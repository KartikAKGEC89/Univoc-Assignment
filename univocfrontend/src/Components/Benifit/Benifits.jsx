import React, { useState } from "react";
import Benifits from "../../Assets/Benifits.png";

const Benefits = ({ benefits }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? benefits.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === benefits.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-5xl md:text-8xl font-medium mb-6 border-b-2 border-gray-500 text-center p-2">
        Benefits
      </h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`w-full sm:w-1/2 md:w-1/3 px-4 flex-shrink-0 transition-transform duration-500 ease-in-out transform ${
                  index === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-90 opacity-50"
                }`}
              >
                <div className="flex justify-center">
                  <div className="bg-gradient-to-br from-blue-500 via-blue-300 to-blue-500 text-white rounded-xl shadow-lg overflow-hidden mb-8 hover:scale-105 transform transition duration-300">
                    <div className="p-4 flex flex-col items-center">
                      <div className="w-20 h-20 mb-4">
                        <img
                          src={Benifits}
                          alt={benefit.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h3 className="text-2xl mb-4 font-semibold">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-center">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={handlePrevious}
          aria-label="Previous benefit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full"
          onClick={handleNext}
          aria-label="Next benefit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Benefits;
