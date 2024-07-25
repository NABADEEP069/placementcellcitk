import ClubCard from "@/components/whycitk/clubcard";
import Image from "next/image";

export default function Page() {
  const clubs = [
    {
      name: "Robotics Club",
      //   imageUrl: "/images/robotics-club-logo.png",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Coding Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "GDSC CIT Kokrajhar",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Cyber Security Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "AI Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "DevCom Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Design Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Astrophysics Club",
      imageUrl: "/cit-logo.png",
    },
    {
      name: "Konstruct Club",
      imageUrl: "/cit-logo.png",
    },
    // Add more clubs as needed
  ];

  return (
    <main className="min-h-screen bg-slate-100">
      <div className="container mx-auto py-5">
        <h1 className="text-4xl font-bold text-center mb-5">Technical Clubs</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {clubs.map((club, index) => (
            <ClubCard key={index} name={club.name} imageUrl={club.imageUrl} />
          ))}
        </div>
      </div>
    </main>
  );
}
