import React from "react";

const links = [
  {
    href: "https://www.amazon.jobs",
    title: "Amazon Recruitment - Explore Career Opportunities and Job Openings",
  },
  {
    href: "https://www.infosys.com/careers",
    title: "Infosys Careers - Join Our Team and Shape the Future of Technology",
  },
  {
    href: "https://careers.google.com",
    title: "Google Careers - Innovate and Impact the World with Your Skills",
  },
  {
    href: "https://www.microsoft.com/en-us/careers",
    title:
      "Microsoft Careers - Empower Every Person and Organization on the Planet to Achieve More",
  },
  {
    href: "https://www.ibm.com/employment",
    title:
      "IBM Jobs - Build Your Career with a Global Leader in Technology and Innovation",
  },
];

// Repeat links in order
const repeatedLinks = Array.from({ length: 5 }, () => links).flat();

const LinkCarousel: React.FC = () => {
  return (
    <div className="w-5/6 mx-auto bg-white text-black flex  items-start shadow-lg rounded-lg px-4 md:px-10 overflow-hidden border py-2 my-4">
      <div className="flex flex-col items-center justify-start px-2 md:p-4 border-r-2 border-primary">
        <h2 className="text-sm sm:text-lg md:text-xl uppercase font-semibold text-primary">
          Latest Updates
        </h2>
      </div>
      <div className="flex flex-col justify-end overflow-hidden h-8 md:h-12 ml-2">
        <div className="animate-slide-up flex flex-col gap-5 md:gap-3">
          {repeatedLinks.map((link, index) => (
            <div
              key={index}
              className="w-full h-8 md:h-12 flex flex-col items-center justify-center duration-500 hover:bg-gray-100 rounded-md"
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline text-sm md:text-base hover:text-blue-700"
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
