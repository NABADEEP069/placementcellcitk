"use client";
import { useState } from "react";
import Image from "next/image";
import DetailCard from "./detailcard";

// Step 1: Define Props
interface CardProps {
  data: {
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    currentcompany: string;
  };
  //   onDetailsClick: () => void; // Function to handle button click
}

// Helper function to truncate description
const truncateDescription = (description: string, wordLimit: number) => {
  const words = description.split(" ");
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return description;
};

// Step 2: Pass Props to Component
export default function Card({
  data,
}: //   onDetailsClick,
CardProps) {
  const [isDetailCardVisible, setIsDetailCardVisible] = useState(false);

  const truncatedDescription = truncateDescription(data.description, 15); // Truncate to 15 words

  const handleDetailsClick = () => {
    setIsDetailCardVisible(true);
  };

  return (
    <div className="w-96 h-80 shadow-lg flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-teal-200 rounded-2xl">
      <div className="w-32 h-32 bg-gray-400 rounded-full overflow-hidden mb-2">
        <Image
          src={data.imageUrl}
          alt={data.altText}
          height={1000}
          width={1000}
          className="object-cover"
        />
      </div>
      <h2 className="text-center text-lg font-semibold">{data.name}</h2>
      <h2 className="text-center text-sm font-bold">{data.currentcompany}</h2>

      <p className="text-center text-sm">{truncatedDescription}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        onClick={handleDetailsClick}
      >
        Get More Details
      </button>
      {isDetailCardVisible && (
        <DetailCard
          setIsDetailCardVisible={setIsDetailCardVisible}
          data={data}
        />
      )}
    </div>
  );
}
