"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaFileAlt, FaGithub } from "react-icons/fa";
import { FaDownload, FaLinkedin } from "react-icons/fa6";

const images = ["/test/one.jpg", "/test/two.jpg", "/test/three.jpg"];

export default function HeroComp() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 7000); // Change image every x seconds

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
        <div className="px-20 text-center">
          <h1 className="text-7xl font-bold text-white">
            TRAINING & PLACEMENT CELL
          </h1>
          <p className="text-white mt-5 text-4xl uppercase">
            Central Institute of Technology, Kokrajhar
          </p>
        </div>
      </div>
      <div className="w-full h-12 absolute bottom-28 flex justify-center items-center gap-10 text-sm font-bold">
        <button className="bg-primary px-5 py-2 rounded-md border-2 uppercase hover:scale-105 duration-300 bg-opacity-90">
          Recruitment Drive Form
        </button>
        <button className="flex items-center gap-2 border-2 border-primary px-5 py-2 rounded-md bg-black bg-opacity-55 uppercase hover:scale-105 duration-300">
          <FaDownload />
          Brochure
        </button>
      </div>
    </section>
  );
}
