
import HeroComp from "@/components/common/herocomp";
import AboutSection from "@/components/home/about";
import CardOne from "@/components/home/cardone";
import ImageCarousel from "@/components/home/recentcompany";
import Link from "next/link";
import Page1 from "./Page1";

export default function Home() {
  return (
    <main >
      <HeroComp />
      <ImageCarousel />
      <AboutSection />
      <div className="bg-gradient-to-br from-blue-300 to-blue-300 py-5 space-y-5">
  <div className="flex bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="w-1/2 flex items-center justify-center p-2">
      <img
        src="/director-2023.jpg"
        alt="Director"
        className="object-cover w-[190px] h-[190px] rounded-full hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <div className="w-1/2 p-5 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-blue-800">Our Vision</h2>
        <h3 className="text-lg text-blue-600 mb-2">FROM DIRECTOR'S DESK</h3>
        <p className="text-gray-700">
          Dear Recruiters, The Training and Placement Cell of the Central Institute of Technology Kokrajhar serves as a bridge between academia and industry, facilitating a seamless transition for our students.
        </p>
      </div>
     
      <Link
          href={"/desription/tpo"}>
             <button className="mt-4 px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm">
        Read More
      </button>
      </Link>
    </div>
  </div>
  <Page1/>
</div>

    </main>
  );
}