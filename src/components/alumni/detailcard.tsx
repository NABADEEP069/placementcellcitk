import Image from "next/image";

interface CardProps {
  setIsDetailCardVisible: (value: boolean) => void;
  data: {
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
    currentcompany: string;
  };
}

export default function DetailCard({
  setIsDetailCardVisible,
  data,
}: CardProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4  relative">
        <button
          onClick={() => setIsDetailCardVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-4xl"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <div className="w-full h-40 bg-gray-200 rounded-t-lg flex items-center justify-center">
            <Image
              src={data.imageUrl}
              alt={data.altText}
              width={500}
              height={500}
              className="bg-gray-400 rounded-full h-36 w-36"
            />
          </div>
          <div className="w-full p-4">
            <h2 className="text-center text-xl font-semibold mb-2">
              {data.name}
            </h2>
            <p className="text-center text-sm font-semibold mb-2">
              <span className="font-normal">Currently working at</span>{" "}
              {data.currentcompany}
            </p>
            <p className="text-sm mb-4">{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
