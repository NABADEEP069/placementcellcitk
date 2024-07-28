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
   name: "Construction Technology Club",
     link: "https://www.cit.ac.in/club-Construction%20Technology",
   },
   {
     name: "VLSI Club",
     link: "https://www.linkedin.com/company/vlsi-club-citk/posts/?feedView=all",
   },
];

export default function Footer() {
  return (
    <footer className=" bg-slate-800 p-10 text-white">
      <div className="flex justify-between">
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
            <a
              href={link.link}
              key={index}
              className="block  py-2 hover:font-semibold text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-1/4  px-10">
          <h5 className="underline">Official Site Links</h5>
          {officialLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block  py-2 hover:font-semibold text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="h-full w-1/4  px-10">
          <h5 className="underline">Club Links</h5>
          {clubLinks.map((link, index) => (
            <a
              href={link.link}
              key={index}
              className="block  py-2 hover:font-semibold text-sm"
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
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-lg" />
            </a>
          </p>
          <p className="border-2 rounded-full w-9 h-9 flex justify-center items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="text-lg" />
            </a>
          </p>
        </div>
        <h6 className="text-center text-white text-xs mt-9">
          Developed by  and managed by{" "}
          <strong>Placement Cell CIT, Kokrajhar </strong>
        </h6>
      </div>
    </footer> 
  );
}
