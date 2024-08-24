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
              "Admissions to M.Tech program is made through Graduate Aptitude Test Engineering (GATE) and Centralized Counseling for M.Tech.",
              "These students are enriched with both qualitative and quantitative skills, thus they make up for the best in class.",
            ]}
          />
        );
      case "Faculty":
        return (
          <CardTwo
            paragraphs={[
              "The Institute is privileged to host faculty who have distinguished themselves as teachers, researchers, and consultants of extraordinary calibre. Faculty members at the institute have acquired years of research and teaching experience in world-class institutions across the globe, and themselves are products of some of the most hallowed institutions in India. In addition, many have substantial industrial experience.",
              "Apart from delivering quality education, they motivate students to engage in cutting-edge research and are highly inclined towards ideation and innovation. Our faculty have published various national and international journals and conference proceedings and organized several workshops.",
            ]}
          />
        );
      case "Projects":
        return (
          <CardTwo
            paragraphs={[
              "Students are required to engage in group projects and research in many of the courses they take. These collaborative efforts allow them to apply theoretical knowledge to real-world problems, fostering practical skills, teamwork, and interdisciplinary learning.In addition to group projects, CITK offers students the option to pursue independent study, enabling them to explore research in fields of personal interest. Guided by faculty mentors, students engage in self-directed learning, conducting original research that contributes to their chosen field. This combination of group and independent research equips CITK students with the skills and experience necessary for advanced studies and professional success.",
            ]}
          />
        );
      case "Technical Clubs":
        return (
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularly hosts distinguished lectures, hardware hackathons, and problem-solving using R&D, IoT, etc. Konstruct (Civil Society of Innovative Engineers) of CIT Kokrajhar works on renewable sources of energy and conducts AutoCAD, design and drafting workshops for Civil engineering students.",
              "Our Coding clubs regularly organize coding competitions on various platforms to help the students strengthen their coding skills. The AI and Developers Clubs of CIT Kokrajhar frequently organize workshops on trending technologies in Machine Learning and Web/Android Development respectively. Our students are honing their skills on websites like Topcoder, SPOJ, CodeChef, etc. in various languages. Apart from this, students have won many hackathons across the nation.",
            ]}
          />
        );
      case "R&D Activities":
        return (
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularly hosts distinguished lectures, hardware hackathons, and problem-solving using R&D, IoT, etc. Konstruct (Civil Society of Innovative Engineers) of CIT Kokrajhar works on renewable sources of energy and conducts AutoCAD, design and drafting workshops for Civil engineering students.",
              "Our Coding clubs regularly organize coding competitions on various platforms to help the students strengthen their coding skills. The AI and Developers Clubs of CIT Kokrajhar frequently organize workshops on trending technologies in Machine Learning and Web/Android Development respectively. Our students are honing their skills on websites like Topcoder, SPOJ, CodeChef, etc. in various languages. Apart from this, students have won many hackathons across the nation.",
            ]}
          />
        );
      case "Infrastructure":
        return (
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar is equipped with state-of-the-art infrastructure to facilitate quality education and research. The campus includes modern classrooms, well-equipped labs, a central library, sports facilities, and hostels. The institute also provides high-speed internet access across the campus.",
              "The facilities are continuously updated to keep pace with the latest advancements, providing students and faculty with an environment conducive to learning and innovation.",
              "The institute’s commitment to maintaining cutting-edge infrastructure is evident in its continuous upgrades and adoption of the latest technologies. This focus on modernity and innovation not only enhances the academic environment but also positions CIT Kokrajhar as a leading institution in the North East, providing a platform for students and faculty to excel in their respective fields."
            ]}
          />
        );
      case "Library":
        return (
          <CardTwo
            paragraphs={[
              "The central library at CIT Kokrajhar is a treasure trove of knowledge with an extensive collection of books, journals, and digital resources. It provides access to numerous online databases and is equipped with a modern digital library section to support research and learning.",
              "The library is open to all students and faculty and is a hub for academic activities, including research, study sessions, and knowledge sharing.",
              "The central library at CIT Kokrajhar is a knowledge hub, offering an extensive collection of books, journals, and digital resources that support both academic and research activities. High-speed internet access is available across the campus, ensuring that students and faculty have seamless connectivity for research, learning, and collaboration. Additionally, the campus features excellent sports facilities and comfortable hostels that contribute to a well-rounded student experience."
            ]}
          />
        );
      case "Industrial Training":
        return (
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar provides its students with ample opportunities for industrial training to bridge the gap between academic knowledge and real-world applications. Students undergo internships and training in various industries to gain hands-on experience and practical skills relevant to their fields of study.",
              "These programs are designed to prepare students for successful careers in their respective fields by exposing them to real-world challenges and work environments.",
            ]}
          />
        );
      case "All Round Development":
        return (
          <CardTwo
            paragraphs={[
              "Participation in Extracurricular Activities throughout the year leads to 360-degree development of an individual. Students also participate in NSS and NCC and spread awareness in society.",
              "To promote the cause of technology and to ignite the young talents of our country, the institute celebrates its technical fest annually, named ‘Techcracy’. Since the first chapter of Techcracy, mass convergence of students from all over the country in different events, workshops, and seminars has increased in leaps and bounds. It has also hosted a glut of talks and symposiums of some very distinguished personalities availing some very praiseworthy and polite remarks from them about the institute and its students which have boosted our students with a lot more zeal and enthusiasm.",
              "The cadence of life touches the right note when it blossoms with all colors. Brushing off all shades of human emotion and artistic flair plays an important role in all-round development. Our cultural fest Ecstasy provides an opportunity for all the students for the realization of this very purpose. The event is a culmination of sound and lights, of music and arts, of dances and drama, of thoughts and words, the perfect place to bring out the artist in everyone and to break the rut of daily life.",
            ]}
          />
        );
      default:
        return null; 
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
              activeComponent === " Our Faculty"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Faculty")}
          >
           Our Faculty
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Projects"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Projects")}
          >
           Student Projects
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Technical Clubs"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Technical Clubs")}
          >
           Our Technical Clubs
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Infrastructure"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Infrastructure")}
          >
          Our  Infrastructure
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "R&D Activities"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("R&D Activities")}
          >
            R&D Activities
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Library"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Library")}
          >
            Library
          </button>
          <button
            className={`px-4 py-2 rounded transition ${
              activeComponent === "Industrial Training"
                ? "bg-primary text-white font-bold"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveComponent("Industrial Training")}
          >
            Industrial Training
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
        <div className="mt-6">{renderComponent()}</div>
      </div>
    </main>
  );
}
