import Image from "next/image";

const recruiters = [
  { src: "/test/amazon.png", alt: "Recruiter 1" },
  { src: "/test/infosys.png", alt: "Recruiter 2" },
  { src: "/test/amazon.png", alt: "Recruiter 3" },
  { src: "/test/amazon.png", alt: "Recruiter 1" },
  { src: "/test/infosys.png", alt: "Recruiter 2" },
  { src: "/test/amazon.png", alt: "Recruiter 3" },
  { src: "/test/amazon.png", alt: "Recruiter 1" },
  { src: "/test/infosys.png", alt: "Recruiter 2" },
  { src: "/test/amazon.png", alt: "Recruiter 3" },
  { src: "/test/amazon.png", alt: "Recruiter 1" },
  { src: "/test/infosys.png", alt: "Recruiter 2" },
  { src: "/test/amazon.png", alt: "Recruiter 3" },
  // Add more recruiter logos here
];

export default function RecruitersPage() {
  return (
    <main className="sm:min-h-screen py-5 px-5 sm:px-10 space-y-5 bg-gray-50">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Our Recruiters
      </h1>
      <section className="flex flex-wrap justify-center gap-5 sm:gap-10 py-7">
        {recruiters.map((recruiter, index) => (
          <div
            key={index}
            className="w-24 h-24 sm:w-40 sm:h-40 flex items-center justify-center bg-white shadow-md rounded-lg p-2 sm:p-3 transform transition duration-300 hover:scale-105"
          >
            <Image
              src={recruiter.src}
              alt={recruiter.alt}
              width={100}
              height={100}
              className="object-contain sm:w-150 sm:h-150"
            />
          </div>
        ))}
      </section>
    </main>
  );
}
