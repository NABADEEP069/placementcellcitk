import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function VisionCard({
  title,
  subtitle,
  description,
  image,
}: CardProps) {


  
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative">
      <div className="sm:h-[16.5rem] sm:w-[16.5rem] bg-gray-300 sm:absolute left-72 md:left-32 sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-xl">
        <Image
          src={image}
          alt="director"
          height={500}
          width={500}
          className="object-cover h-full"
        />
      </div>
      <div className="sm:h-[19rem] bg-white sm:w-1/2 md:w-2/3 sm:pl-48 p-5 sm:rounded-2xl flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <h5 className="text-slate-500">{subtitle}</h5>
          <hr className="w-2/3 border-primary" />

          <p className="mt-3">{description}</p>
        </div>
        <div className="flex justify-end">
          <button className="text-sm font-semibold text-green-500"></button>
        </div>
      </div>
    </div>
  );
}