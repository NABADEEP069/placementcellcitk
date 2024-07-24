import Image from "next/image";

// Step 1: Define Props
interface CardProps {
  imageUrl: string;
  altText: string;
  name: string;
  description: string;
  //   onDetailsClick: () => void; // Function to handle button click
}

// Step 2: Pass Props to Component
export default function Card({
  imageUrl,
  altText,
  name,
  description,
}: //   onDetailsClick,
CardProps) {
  return (
    <div className="w-96 h-72 shadow-lg flex flex-col items-center p-4 bg-gradient-to-r from-blue-100 to-teal-200 rounded-2xl">
      <div className="w-32 h-32 bg-gray-400 rounded-full overflow-hidden mb-2">
        <Image
          src={imageUrl} // Use imageUrl prop
          alt={altText} // Use altText prop
          height={1000}
          width={1000}
          className="object-cover"
        />
      </div>
      <h2 className="text-center text-lg font-semibold">{name}</h2>{" "}
      {/* Use name prop */}
      <p className="text-center text-sm">
        {description} {/* Use description prop */}
      </p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        // onClick={onDetailsClick} // Use onDetailsClick prop
      >
        Get More Details
      </button>
    </div>
  );
}
