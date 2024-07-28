import fs from "fs";
import path from "path";
import Image from "next/image";

interface Recruiter {
  src: string;
  alt: string;
}

export default function RecruitersPage() {
  const directoryPath = path.join(process.cwd(), "public", "company_logos");
  const filenames = fs.readdirSync(directoryPath);

  const recruiters: Recruiter[] = filenames.map((filename) => ({
    src: `/company_logos/${filename}`,
    alt: `Recruiter ${filename.split(".")[0]}`,
  }));

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
