import VisionCard from "@/components/common/card";
import HeroComp from "@/components/common/herocomp";
import AboutSection from "@/components/home/about";
import CardOne from "@/components/home/cardone";
import ImageCarousel from "@/components/home/recentcompany";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroComp />
      <AboutSection />
      <ImageCarousel />
      <div className="bg-gradient-to-br from-teal-300 to-blue-300 py-5 space-y-5">
        <VisionCard
          title="Our Vision"
          subtitle="FROM DIRECTOR'S DESK"
          description="The Training and Placement Cell of the Central Institute of Technology Kokrajhar serves as a bridge between academia and industry, facilitating a seamless transition for our students into the professional realm. We understand the pivotal role of that recruiters play in identifying and harnessing talent, and we are eager to forge lasting partnership that benefit both our students and your organization."
          image="/director-2023.jpg"
        />
        <CardOne />
       
      </div>
    </main>
  );
}
