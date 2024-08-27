"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaDownload, FaUserPlus } from "react-icons/fa";
import RecruitmentForm from "../home/recruitmentform";

const images = [
  "/test/homepage-1 CITK.jpg",
  "/test/CIT-Kokrajhar-celebrates-second-convocation-5.jpeg",
];

export default function HeroComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ height: "calc(100vh - 3.5rem)" }}
    >
      <div className="relative w-full h-screen overflow-hidden carousel">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === activeIndex ? "opacity-90" : "opacity-0"
            } carousel-item`}
          >
            <Image src={src} alt="" layout="fill" objectFit="cover" />
          </div>
        ))}
      </div>
      <div className="absolute top-0 bottom-0 w-full flex items-center justify-center">
        <div className="px-5 md:px-20 text-center py-5 md:py-10 rounded-2xl">
          <h1
            className="text-3xl md:text-6xl font-bold text-white"
            style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)" }}
          >
            TRAINING & PLACEMENT CELL
          </h1>
          <p
            className="text-white mt-2 md:mt-5 text-xl md:text-3xl uppercase font-semibold"
            style={{ textShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)" }}
          >
            Central Institute of Technology, Kokrajhar
          </p>
        </div>
      </div>
      <div className="w-full h-12 absolute bottom-20 md:bottom-28 flex flex-row justify-center items-center gap-5 md:gap-10 text-sm font-bold">
        {/* <button
          className="flex items-center gap-2 border-2 border-primary px-5 py-2 rounded-md bg-black bg-opacity-55 uppercase hover:scale-105 duration-300"
          onClick={() => setShowForm(!showForm)}
        >
          <FaUserPlus className="text-xl" />
          Recruitment
        </button> */}
        <button className="flex items-center gap-2 border-2 border-primary px-5 py-2 rounded-md bg-black bg-opacity-55 uppercase hover:scale-105 duration-300">
          <FaDownload />
          Brochure
        </button>
      </div>
      {showForm && <RecruitmentForm setShowRecruitmentForm={setShowForm} />}
    </section>
  );
}
