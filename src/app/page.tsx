import VisionCard from "@/components/common/card";
import HeroComp from "@/components/common/herocomp";
import AboutSection from "@/components/home/about";
import CardOne from "@/components/home/cardone";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroComp />
      <AboutSection />
      <div className="bg-gradient-to-br from-teal-300 to-blue-300 py-5 space-y-5">
        <VisionCard
          title="Our Vision"
          subtitle="FROM DIRECTOR'S DESK"
          description="The Training and Placement Cell of the Central Institute of Technology Kokrajhar serves as a bridge between academia and industry, facilitating a seamless transition for our students into the professional realm. We understand the pivotal role of that recruiters play in identifying and harnessing talent, and we are eager to forge lasting partnership that benefit both our students and your organization."
          image="/director-2023.jpg"
        />
        <CardOne />
        <VisionCard
          title="Dean Alumni Message"
          subtitle="DEAN ALUMNI & EXTERNAL RELATIONS OFFICE"
          description="I am delighted to address you as the Dean of Alumni and External Relations for the Training and Placement department of CIT Kokrajhar. It gives me immense pleasure to share with you the remarkable achievements of our alumni, who have consistently been placed in top organizations across various industries."
          image="/dean.jpg"
        />
      </div>
    </main>
  );
}
