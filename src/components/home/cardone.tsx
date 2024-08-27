import Image from "next/image";
import Link from "next/link";

export default function CardOne() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-center items-center relative p-5">
                <div className="bg-white sm:w-1/2 md:w-2/3 p-5 sm:pl-12 sm:rounded-2xl flex flex-col justify-between shadow-lg">
                  <div>
                    <h2 className="text-xl font-bold text-blue-800">Exploring the Skies</h2>
                    <h3 className="text-blue-600 mb-2">THE TRAINING AND PLACEMENT CELL</h3>
                    <hr className="w-2/3 border-primary mt-2" />
                    <p className="mt-3">
                      Dear Esteemed Recruiters, Welcome to CIT Kokrajhar, your premier destination for top-tier talent in engineering and technology. Located in the prestigious Bodoland Territorial (BTR) of India, we have established a solid reputation in both Assam and the North Eastern Region (NER). Our accomplished alumni are living proof of our tradition of excellence, excelling across the globe.
                    </p>
                  </div>
                
                  <Link href={"/desription/director"}>
            <button className="mt-4 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm">
              Read More
            </button>
          </Link>

                  
                </div>
                
                <div className="h-[16.5rem] w-[16.5rem] bg-gray-300 rounded-full overflow-hidden flex items-center justify-center mt-4 sm:mt-0 sm:ml-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-full">
                    <Image
                      src="/dr-agile-methew.jpg"
                      alt="Director"
                      layout="fill"
                      className="object-cover w-[180px] h-[180px] rounded-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
    </div>
  );
}
