import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhone } from "react-icons/fa";
import Image from "next/image";


interface InfoCardProps {
  imageUrl: string;
  altText: string;
  name: string;
  role: string;
  email: string;
  phone?: string;
  linkedinUrl?: string; 
  githubUrl?: string; 
}


export default function InfoCard({
  imageUrl,
  altText,
  name,
  role,
  email,
  phone,
  linkedinUrl,
  githubUrl,
}: InfoCardProps) {
  return (
    <div className="bg-gray-100 shadow-xl rounded-lg flex flex-col w-full sm:w-80 md:h-[22rem] p-5 hover:shadow-primary hover:shadow-md duration-500 group">
      <div className="flex justify-center">
        <Image
          src={imageUrl}
          alt={altText}
          height={150}
          width={150}
          className="rounded-full group-hover:scale-110 duration-500 h-36 w-36"
        />
      </div>
      <div className="pt-4 pb-4 text-center h-40">
        <div className="text-xl font-bold text-gray-800 group-hover:text-primary duration-300 capitalize">
          {name}
        </div>
        <div className="text-md text-gray-600 mt-2">{role}</div>
      </div>
      <div className="flex justify-around border-t border-slate-300 pt-4 text-lg">
        <a href={`mailto:${email}`} className="hover:text-red-500">
          <FaEnvelope className="transition-colors duration-200" />
        </a>
        {phone && (
          <a href={`tel:${phone}`} className="hover:text-green-500">
            <FaPhone className="transition-colors duration-200" />
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn className="transition-colors duration-200 text-xl" />
          </a>
        )}
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub className="transition-colors duration-200 text-xl" />
          </a>
        )}
      </div>
    </div>
  );
}
