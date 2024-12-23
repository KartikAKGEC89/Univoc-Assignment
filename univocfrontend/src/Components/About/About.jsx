import React, { useState } from "react";
import AboutImg from "../../Assets/About.png";

const About = () => {
  const programDetails = [
    { label: "Duration", value: "45hrs" },
    { label: "Language", value: "English" },
    { label: "Total Credits", value: "30" },
  ];

  const courses = [
    {
      title: "Technical Skills",
      content:
        "Content for Technical Skills: The course covers fundamental and advanced topics in electrical engineering and electronics. It includes subjects like circuit analysis, electrical machines, power systems, signal processing, control systems, and electronic devices.",
    },
    {
      title: "Functional Skills",
      content:
        "Content for Functional Skills: The course covers fundamental and advanced topics in electrical engineering and electronics. It includes subjects like circuit analysis, electrical machines, power systems, signal processing, control systems, and electronic devices.",
    },
    {
      title: "Behavioural Skills",
      content:
        "Content for Behavioural Skills: The course covers fundamental and advanced topics in electrical engineering and electronics. It includes subjects like circuit analysis, electrical machines, power systems, signal processing, control systems, and electronic devices.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 items-start">
        <div className="flex flex-col gap-6 lg:w-[60%] w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 border-b-2 border-gray-300 pb-2">
            About the Program
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            The Electrical and Electronics course covers fundamental and advanced topics in electrical engineering and electronics. It includes subjects like circuit analysis, electrical machines, power systems, signal processing, control systems, and electronics devices. Students learn to design and analyze electrical circuits, understand the operation of electrical machines and power generation, and delve into communication systems, microprocessors, and embedded systems. Practical applications such as renewable energy systems, electrical instrumentation, and automation technologies are also explored.
          </p>
          <div className="border border-gray-300 rounded-lg p-4 sm:p-6">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 border-b-2 border-gray-800 pb-2">
              Courses
            </h2>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded-lg shadow-sm"
                >
                  <div
  className="cursor-pointer text-base md:text-lg px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
  onClick={() => toggleAccordion(index)}
>
  <span>{course.title}</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 text-black"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>

                  
                  {activeIndex === index && (
                    <div className="text-sm md:text-base px-4 py-2">
                      {course.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-[40%] w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center">
          <div className="flex justify-center items-center w-full">
            <img
              src={AboutImg}
              alt="Program preview"
              className="lg:w-4/5 sm:w-2/3 md:w-1/2 h-auto object-cover p-2 sm:p-6"
            />
          </div>
          <div className="p-4 sm:p-6 w-full">
            <button className="w-full mb-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-300 text-white text-base sm:text-lg md:text-xl font-medium rounded-lg hover:shadow-lg">
              Start Learning
            </button>
            <div className="space-y-4">
              {programDetails.map((detail, index) => (
                <div className="flex justify-between items-center border-b border-gray-200 py-2" key={index}>
  <span className="flex items-center text-sm sm:text-base text-gray-700 font-medium">
    {detail.label}
  </span>
  <span className="text-sm sm:text-base text-gray-500">{detail.value}</span>
</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;