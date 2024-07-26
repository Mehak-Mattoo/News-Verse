import React from "react";
import { BsCalendarEventFill } from "react-icons/bs";
import { MdOutlineScreenshot } from "react-icons/md";
import { BsGlobeAsiaAustralia } from "react-icons/bs";
import { RiNavigationFill } from "react-icons/ri";

const features = [
  {
    icon: <BsCalendarEventFill className="text-4xl text-[#FF8225]" />,
    title: "Live Events",
    description: "Stay updated with live events as they happen.",
  },
  {
    icon: <MdOutlineScreenshot className="text-4xl text-[#FF8225]" />,
    title: "Responsive Design",
    description:
      "Our design adapts to different screen sizes for the best experience.",
  },
  {
    icon: <BsGlobeAsiaAustralia className="text-4xl text-[#FF8225]" />,
    title: "Global Coverage",
    description: "Get the latest news from around the world.",
  },
  {
    icon: <RiNavigationFill className="text-4xl text-[#FF8225]" />,
    title: "Easy Navigation",
    description:
      "Easily navigate through news articles organized into different categories.",
  },
];

const About = () => {
  return (
    <div className="bg-[#C36A2D] dark:bg-[#0f172a] py-12">
      <div className="container mx-auto px-4">
        <h2 className=" text-xl sm:text-2xl md:text-4xl lg:text-6xl dark:text-[#C36A2D] font-extrabold  text-orange-200 mb-12">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" bg-[#F8EDED] dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
