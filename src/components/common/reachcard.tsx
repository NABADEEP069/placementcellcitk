import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function ReachCard({
  title,
  subtitle,
  description,
  image,
}: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative group">
      <div className="sm:h-[16.5rem] w-96 sm:absolute left-16 sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-xl group-hover:scale-105 duration-300">
        <Image
          src={image}
          alt="director"
          height={500}
          width={500}
          className="object-cover h-full"
        />
      </div>
      <div className="sm:h-[19rem] bg-gradient-to-r from-teal-500 to-blue-200 sm:w-5/6 sm:pl-96 p-5 sm:rounded-2xl flex flex-col justify-center gap-5  shadow-lg">
        <div className="">
          <h3 className="text-4xl font-semibold">{title}</h3>
        </div>

        <p className="mt-">{description}</p>
      </div>
    </div>
  );
}
