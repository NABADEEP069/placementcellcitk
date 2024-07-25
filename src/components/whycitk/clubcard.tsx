import Image from "next/image";

interface ClubCardProps {
  name: string;
  imageUrl: string;
}

export default function ClubCard({ name, imageUrl }: ClubCardProps) {
  return (
    <div className="h-28 w-80 bg-white flex items-center gap-4 px-5 py-2 rounded-md shadow-md shadow-primary">
      <div className="h-full">
        <Image
          src={imageUrl}
          alt="Club Logo"
          height={100}
          width={100}
          className="object-cover h-full"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
    </div>
  );
}
