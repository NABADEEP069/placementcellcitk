import Image from "next/image";

export default function CardOne() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative">
      <div className="h-[16.5rem] w-[16.5rem] bg-gray-300 sm:absolute right-72 md:right-32 rounded-2xl overflow-hidden">
        <Image
          src={"/dr-agile-methew.jpg"}
          alt="director"
          height={500}
          width={500}
          className="object-cover h-full"
        />
      </div>
      <div className="sm:h-[19rem] bg-white sm:w-1/2 md:w-2/3 sm:pr-48 p-5 sm:rounded-2xl flex flex-col justify-between shadow-lg">
        <div>
          <h3 className="text-2xl font-semibold">Exploring the skies</h3>
          <h5 className="text-slate-500">THE TRAINING AND PLACEMENT CELL</h5>
          <hr className="w-2/3 border-primary" />

          <p className="mt-3">
            Welcome to CIT Kokrajhar, your premier destination for top-tier
            talent in engineering and technology. Our accomplished alumni are
            living proof of our tradition of excellence, excelling across
            diverse domains from engineering to research and development.
          </p>
        </div>
        <div className="">
          <button className="text-sm font-semibold text-green-500">
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
}
