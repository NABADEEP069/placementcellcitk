import React from "react";
import Image from "next/image";

const images = [
  { src: "/test/amazon.png", title: "amazon" },
  { src: "/test/infosys.png", title: "infosys" },
];

// Repeat images in order
const repeatedImages = Array.from({ length: 5 }, () => images).flat();

const ImageCarousel: React.FC = () => {
  return (
    <div className="w-full bg-slate-100 text-black flex flex-col items-center shadow-md px-24 overflow-hidden border py-1">
      <h2 className="text-xl uppercase font-semibold text-primary">
        Our Recent Recruitment Companies
      </h2>
      <div className="animate-slide flex gap-3">
        {repeatedImages.map((image, index) => (
          <div
            key={index}
            className="sm:w-32 w-28 h-28 sm:h-12 flex flex-col items-center justify-center group hover:scale-110 duration-500"
          >
            <Image
              src={image.src}
              alt={image.title}
              className="md:h-20 sm:h-10 h-10 md:w-28 sm:w-20 w-14 rounded-md object-cover"
              width={500}
              height={500}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
