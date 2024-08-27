
import Link from "next/link";

export default function Page1() {
  return (
    <main >
            <div className="bg-gradient-to-br from-blue-300 to-blue-300 py-5 space-y-5">

  <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="w-1/2 flex items-center justify-center p-2">
      <img
        src="/dr-agile-methew.jpg"
        alt="Director"
        className="object-cover w-[190px] h-[190px] rounded-full hover:scale-105 transition-transform duration-300" // Round photo with hover effect
      />
    </div>
    <div className="w-1/2 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-blue-800">Exploring the Skies</h2>
        <h3 className="text-lg text-blue-600 mb-2">THE TRAINING AND PLACEMENT CELL</h3>
        <p className="text-gray-700">
        Dear Esteemed Recruiters, Welcome to CIT Kokrajhar, your premier destination for top-tier talent in engineering and technology. Located in the prestigious Bodoland Territorial (BTR) of India, we have established a solid reputation in both Assam and the North Eastern Region (NER). Our accomplished alumni are living proof of our tradition of excellence, excelling across the globe.
        </p>
      </div>
     
      <Link
          href={"/desription/director"}>
             <button className="mt-4 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm">
        Read More
      </button>
      </Link>
    </div>
  </div>
</div>

    </main>
  );
}