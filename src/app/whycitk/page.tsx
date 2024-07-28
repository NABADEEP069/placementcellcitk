"use client";
import CardOne from "@/components/whycitk/cardone";
import CardTwo from "@/components/whycitk/cardtwo";
import { useState } from "react";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState(
    "The Academic Program"
  );

  const renderComponent = () => {
    switch (activeComponent) {
      case "The Academic Program":
        return <CardOne />;
      case "Admission Criteria":
        return (
          <CardTwo
            paragraphs={[
              "B.Tech Entrance at CIT Kokrajhar is based on JEE Mains score or CITKEE score. As the students are admitted through the esteemed JEE Mains and represents the top 2% of the candidates that appear for the exam nationwide, they are handpicked from the garden of knowledge and critical thinking.",
              "Admissions to M.Tech program is made throuh Graduate Aptitude Test Engineering (GATE) and Centralized Couselling for M.Tech.",
              "These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.",
            ]}
          />
        );
      case "Faculty":
        return (
          <CardTwo
            paragraphs={[
              "The Institute is privileged to host faculty who have distinguished themselves as teachers, researchers, and consultants of extraordinary calibre. Faculty members at the institute have acquired years of research and teaching experience in world-class institutions across the globe, and themselves are products of some of the most hallowed institutions in the India. In addition, many have substantial industrial experience.",
              "Apart from delivering quality education,they motivate students to engage in cutting edge research and are highly inclined towards ideation and innovation. Our faculty have published various national and international journals and conference proceedings and organized several workshops.",
            ]}
          />
        );
      case "Projects":
        return (
          <CardTwo
            paragraphs={[
              "Projects are an integral part of the education program. Students are required to do group projects/research in many courses that they are taught. Students are also provided with an option of the independent study which enables them to do research in the field of their interest.",
            ]}
          />
        );
      case "Technical Clubs":
        return (
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter college level. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularly hosts distinguished lectures , hardware hackathons and problem solving using R&D, IoT etc. Konstruct (Civil Society of Innovative Engineers ) of CIT Kokrajhar works on renewable sources of energy and conducts AutoCAD, design and drafting etc workshops for Civil engineering students.",
              "Our Coding clubs regularly organises coding competitions on various platforms to help the students strengthen their coding skills. The AI and Devlopers Clubs of CIT Kokrajhar frequently organise workshops on trending technologies in Machine learning and Web/Android Development respectively.Our students are honing their skills on websites like Topcoder,SPOJ, CodeChef etc. in various languages. Apart from this, students won many hackathons across the nation.",
            ]}
          />
        );
      case "All Round Development":
        return (
          <CardTwo
            paragraphs={[
              "Participation in Extracurricular Activities throughout the year leads to 360 degree development of an individual. Students also participate in NSS and NCC and spread awareness in the society.",
              "To promote the cause of technology and to ignite the young talents of our country, the institute celebrates its technical fest annually, named ‘Techcracy’. Since the first chapter of Techcracy, mass convergence of students from all over the country in different events, workshops and seminars have increased in leaps and bounds. It has also hosted a glut of talks and symposiums of some of very distinguished personalities availing some very praiseworthy and polite remarks from them about the institute and its students which has boosted our students with a lot more zeal and enthusiasm.",
              "The cadence of life touches right note when it blossoms with all colors. Brushing of all shades of human emotion and artistic flair plays an important role in an all-round development. Our cultural fest Ecstasy provides opportunity to all the students for the realization of this very purpose. The event is a culmination of sound and lights, of music and arts, of dances and drama, of thoughts and words, the perfect place to bring out the artist in everyone and to break the rut of daily life.",
            ]}
          />
        );
      default:
        return null; // Or any default component or message
    }
  };

  return (
    <main className="min-h-screen">
      <div className="mx-5 px-5 py-5 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl text-center font-bold mb-6 text-blue-600">
          Why Recruit at CITK?
        </h1>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          CIT Kokrajhar encourages its students to balance their academics and
          co-curricular activities. This allows for an all-round development, as
          evidenced by the numerous projects undertaken and the participation in
          sports and cultural events. This is evident from the wide repositories
          of projects that they have done as well as their participation in
          sports and cultural events.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          The institute also encourages the students to showcase their research
          in national conferences and workshops. The students work as Teaching
          Assistants, guiding and aiding the students in the batches that are
          junior to them.
        </p>
      </div>
      {/* new section */}
      <div className="py-5 px-4 sm:px-10">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 text-lg py-1 sticky top-14 bg-white">
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "The Academic Program"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("The Academic Program")}
          >
            The Academic Program
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Admission Criteria"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Admission Criteria")}
          >
            Admission Criteria
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Faculty"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Faculty")}
          >
            Faculty
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Projects"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Projects")}
          >
            Projects
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Technical Clubs"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Technical Clubs")}
          >
            Technical Clubs
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "All Round Development"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("All Round Development")}
          >
            All Round Development
          </button>
        </div>
        <div className="mt-2">{renderComponent()}</div>
      </div>
    </main>
  );
}
