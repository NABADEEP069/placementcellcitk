import React from "react";
import Image from "next/image";

interface Mou {
  name: string;
  imageUrl: string;
}

const mous: Mou[] = [
  { name: "MoU with ABC University", imageUrl: "/images/mou1.jpg" },
  { name: "MoU with XYZ Corporation", imageUrl: "/images/mou2.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  { name: "MoU with DEF Institute", imageUrl: "/images/mou3.jpg" },
  // Add more MoUs as needed
];

const MouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">University MoUs</h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mous.map((mou, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={mou.imageUrl}
                alt={mou.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{mou.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MouPage;
