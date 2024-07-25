import Image from "next/image";
import { FaGlobe } from "react-icons/fa";

const quicklinks = [
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: "Alumni",
    link: "/alumni",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Why CITK",
    link: "/whycitk",
  },
];

const officialLinks = [
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
];

const clubLinks = [
  {
    name: "test",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "CITK",
    link: "https://cit.ac.in",
  },
  {
    name: "test",
    link: "https://cit.ac.in",
  },
];

export default function Footer() {
  return (
    <footer className="h-96 bg-slate-800 p-10 text-white">
      <div className="h-52 flex justify-between">
        <div className="h-full w-1/4 flex flex-col items-center">
          <Image
            src={"/cit-logo.png"}
            alt="logo"
            height={500}
            width={500}
            className="object-fit h-32 w-32"
          />
          <p className="text-center">
            Central Institute of Technology Kokrajhar - 783370, Assam, India
          </p>
          {/* <p className="border-2 p-2 rounded-full">
            <a href="https://cit.ac.in" target="_blank">
              <FaGlobe className="text-lg" />
            </a>
          </p> */}
        </div>
        <div className="h-full w-1/4  px-10">
          <h5 className="underline">Quick Links</h5>
          {quicklinks.map((link, index) => (
            <a href={link.link} key={index} className="block  py-2">
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-1/4  px-10">
          <h5 className="underline">Official Site Links</h5>
          {officialLinks.map((link, index) => (
            <a href={link.link} key={index} className="block  py-2">
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-1/4  px-10">
          <h5 className="underline">Club Links</h5>
          {clubLinks.map((link, index) => (
            <a href={link.link} key={index} className="block  py-2">
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <hr className="mb-3" />
        <div className="flex justify-center gap-5">
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a href="https://cit.ac.in" target="_blank">
              <FaGlobe className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a href="https://cit.ac.in" target="_blank">
              <FaGlobe className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a href="https://cit.ac.in" target="_blank">
              <FaGlobe className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a href="https://cit.ac.in" target="_blank">
              <FaGlobe className="text-lg" />
            </a>
          </p>
        </div>
        <h6 className="text-center text-white text-xs mt-9">
          Developed by <strong>Debanand Singha</strong> and managed by{" "}
          <strong>Nabadeep Das</strong>
        </h6>
      </div>
    </footer>
  );
}
