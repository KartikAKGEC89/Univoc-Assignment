import React from "react";
import Rating from "./Rating";
import imageDD from '../../Assets/imageDD.png';
import imageMM from '../../Assets/imageMM.png';
import imageFF from '../../Assets/imageFF.png';

const jobRoles = [
  "Electrical Engineer",
  "Electronics Engineer",
  "Control Systems Engineer",
  "Circuit Design Engineer",
  "Power Systems Engineer",
  "Robotics Engineer",
  "Embedded Systems Engineer",
  "Telecommunications Engineer",
  "Test Engineer",
  "Energy Manager"
];

const relatedCourses = [
  {
    title: "Data Science",
    rating: 4.6,
    image: imageFF
  },
  {
    title: "Electrical and Communication",
    rating: 3.8,
    image: imageMM
  },
  {
    title: "Dot Net Full Stack",
    rating: 3.2,
    image: imageDD
  }
];

const JobsandRoles = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div>
        <h2 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 p-2">
          Job Roles
        </h2>
        <div className="flex flex-wrap gap-4">
          {jobRoles.map((role, index) => (
            <span
              key={index}
              className="text-lg px-4 text-gray-800 rounded-md flex items-center"
            >
              <span className="w-2 h-2 bg-gray-800 rounded-full mr-2"></span>
              {role}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-5xl font-medium mb-6 border-b-2 border-b-gray-500 p-2">
          Related Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {relatedCourses.map((course, index) => (
            <div
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 bg-transparent flex flex-col lg:flex-row border-b-2 border-black p-4"
            >
              <img
                src={course.image}
                alt={course.title}
                className="h-[180px] object-cover rounded-lg lg:w-[200px] w-full mb-4 lg:mb-0"
              />
              <div className="flex flex-col justify-between ml-4">
                <div className="font-normal text-2xl">{course.title}</div>
                <div>
                  <Rating rating={course.rating} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobsandRoles;