import Image from "next/image";

interface CardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export default function ReachCardVarTwo({
  title,
  subtitle,
  description,
  image,
}: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative group">
      <div className="sm:h-[16.5rem] w-96 sm:absolute right-10 sm:rounded-2xl rounded-t-2xl overflow-hidden shadow-xl group-hover:scale-105 duration-300">
        <Image
          src={image}
          alt="director"
          height={500}
          width={500}
          className="object-cover h-full"
        />
      </div>
      <div className="sm:h-96 md:h-80 bg-gradient-to-r from-blue-200 to-teal-500 sm:w-5/6 sm:pr-80 p-7 sm:rounded-2xl flex flex-col justify-center gap-5 shadow-lg">
        <div>
          <h3 className="text-4xl font-semibold">{title}</h3>
        </div>

        <section>
          <p>
            Reaching CIT Kokrajhar by air offers a swift and comfortable way to
            access this esteemed institution nestled in the heart of Assam,
            India.
          </p>
          <ul className="list-disc px-10 py-1">
           
            <li>
              The viable option for reaching CIT Kokrajhar by air is through
              Guwahati Airport (GAU). Upon arrival at Guwahati Airport,
              travelers can continue their journey to CIT Kokrajhar through
              various transportation modes, such as buses, trains, or private
              vehicles.
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
