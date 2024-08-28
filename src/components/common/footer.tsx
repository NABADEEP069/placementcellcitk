import Image from "next/image";
import { FaEnvelope, FaFacebook, FaGlobe, FaLinkedin } from "react-icons/fa";

const quicklinks = [
  {
    name: "Courses",
    link: "/courses",
  },
  {
    name: " Our Alumni",
    link: "/alumni",
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
    name: "Central Library",
    link: "http://centrallibrary.cit.ac.in/",
  },
  {
    name: "Alumini Association",
    link: "https://www.cit.ac.in/page-alumni-achievements",
  },
  {
    name: "MOU's",
    link: "https://www.cit.ac.in/institute-mou",
  },
];

const clubLinks = [
  {
    name: "Cyber X Secure Club",
    link: "https://sites.google.com/cit.ac.in/cyberxsecureclub/home?authuser=0",
  },
  {
    name: "AI Club",
    link: "https://cit.ac.in",
  },
  {
    name: "Robotics Club",
    link: "https://roboticsclub.cit.ac.in/",
  },
  {
    name: "DevCom Club",
    link: "https://cit.ac.in",
  },
  {
    name: "Design Circle Club",
    link: "https://www.cit.ac.in/club-Design%20Circle",
  },
  {
    name: "Coding Club",
    link: "https://codingclub.cit.ac.in/",
  },
  {
    name: "Konstruct Club",
    link: "https://cit.ac.in",
  },
  {
    name: "VLSI Club",
    link: "https://sites.google.com/cit.ac.in/vlsiclubcitk/home?authuser=0",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-800 p-10 text-white">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="h-full w-full md:w-1/4 flex flex-col items-center mb-6 md:mb-0">
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
        </div>
        <div className="h-full w-full md:w-1/4 px-0 md:px-10 mb-6 md:mb-0">
          <h5 className="underline text-center">Quick Links</h5>
          {quicklinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block py-2 hover:font-semibold text-sm text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-full md:w-1/4 px-0 md:px-10 mb-6 md:mb-0">
          <h5 className="underline text-center">Official Site Links</h5>
          {officialLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block py-2 hover:font-semibold text-sm text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-full md:w-1/4 px-0 md:px-10">
          <h5 className="underline text-center">Club Links</h5>
          {clubLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block py-2 hover:font-semibold text-sm text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-5">
        <hr className="mb-3" />
        <div className="flex justify-center gap-5">
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a
              href="https://www.linkedin.com/school/t-p-cell-cit-kokrajhar/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a
              href="mailto:tnp@cit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a
              href="https://www.facebook.com/tnpcellcitk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-lg" />
            </a>
          </p>
        </div>
        <h6 className="text-center text-white text-xs mt-9">
          Developed and Managed by{" "}
          <strong>Placement Cell, CITK </strong>
        </h6>
      </div>
    </footer>
  );
}
