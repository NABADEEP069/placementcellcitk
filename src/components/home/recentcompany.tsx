import React from "react";

const links = [
  {
    href: "https://www.tcsion.com/hub/national-qualifier-test/",
    title: "TCS iON NQT National Qualifier Test",
  },
   {
     href: "https://sih.gov.in/",
     title: "Smart India Hackathon-2024 is live now",
   },
   {
     href: "https://unstop.com/competitions/tata-imagination-challenge-2024-student-track-tata-imagination-challenge-2024-tata-group-1096490?ref=LawCentre",
     title:
       "Tata Imagination Challenge 2024",
  },

];


const repeatedLinks = Array.from({ length: 2 }, () => links).flat();

const LinkCarousel: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto bg-white text-black flex items-center shadow-lg rounded-lg px-4 overflow-hidden border py- my-4">
      <div className="flex flex-col items-center justify-start px-2 md:p-4 border-r-2  w-1/2 ">
        <h2 className="text-sm sm:text-lg md:text-xl uppercase font-semibold text-primary">
          Latest Updates
        </h2>
      </div>
      <div className="flex flex-col justify-end overflow-hidden h-8 md:h-12 ml-2 ">
        <div className="animate-slide-left flex flex-row gap-5 md:gap-3">
          {repeatedLinks.map((link, index) => (
            <div
              key={index}
              className="h-8 md:h-12 flex flex-col items-center justify-center duration-500 hover:bg-gray-100 rounded-md"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm md:text-base hover:text-blue-700 whitespace-nowrap overflow-hidden text-ellipsis"
              >
                {link.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkCarousel;
