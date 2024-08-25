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
        return ( <div>
          <CardTwo
            paragraphs={[
             "Bachelor of Technology (Direct Entry)SELECTION PROCESS:  Candidates seeking admission to B. Tech through Direct Entry Scheme must qualify either CITDEE conducted by CIT Kokrajhar or JEE (Mains) conducted by National Testing Agency (NTA). 60% of intake is allotted for CITDEE and rest of the seats are allotted for JEE (Mains) qualified candidates.",
              "SELECTION PROCESS:Candidates seeking admission to Diploma must qualify either Central Institute of Technology Entrance Examination (CITEE) conducted by CIT Kokrajhar or Polytechnic Admission Test (PAT) conducted by SCTE, Assam. 85% of intake is allotted for CITEE and rest of the seats are allotted for PAT qualified candidates.",
              "CITDEE:    The CITDEE is conducted every year by CIT Kokrajhar for entry into B. Tech programme. It is of three hours duration and consists of multiple choice questions with a total of 125 marks. The question paper consists of four (4) sections: A, B, C & D. Section A consists of twenty five questions in Physics, Section B consists of twenty five questions in Chemistry, Section C consists of fifty questions in Mathematics and Section D consists of twenty-five questions in English Communication Skill. Each question carries one mark.",
              "SELECTION PROCESS:Candidates seeking admission to B. Des programme through Direct Entry Scheme must qualify either Central Institute of Technology Bachelor of Design Admission Test (CITBDAT) conducted by CIT Kokrajhar or Undergraduate Common Entrance Examination of Design (UCEED) conducted by IIT Bombay. 60% of intake is allotted for CITBDAT and rest of the seats are allotted for UCEED qualified candidates.",
              "SELECTION PROCESS:Candidates seeking admission to M. Tech Programme must qualify either Central Institute M. Tech Entrance Examination CITMEE 2020 conducted by CIT Kokrajhar or the Graduate Aptitude Test in Engineering (GATE) conducted by IITs and IISc on behalf of National Coordination Board-GATE followed by personal interview to be conducted by respective Departments. GATE qualified candidates will be given preference.",
              "SELECTION PROCESS:For getting admission into M. Des programme, the candidates must qualify either Central Institute of Technology Master of Design Admission Test (CITMDAT)  conducted by CIT Kokrajhar or Common Entrance Examination for Design (CEED).",
              "Ph.D Programme SELECTION PROCESS: The selection process is through a Written Test followed by Personal Interview.",
            ]}
          />
          <div className="flex justify-center mt-6">
            <a
              href="http://www.cit.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
            >
              Click here for more information
            </a>
          </div>
        </div>
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
        case "R&D Activities":
          return (
            <div>
            <CardTwo
              paragraphs={[
                "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularly hostnation.",
              ]}
            />
            <div className="flex justify-center mt-6">
              <a
                 href="http://www.cit.ac.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
              >
                Click here for more information
              </a>
            </div>
          </div>
          );
     
        
      case "Student Clubs":
        return (
          <div>
          <CardTwo
            paragraphs={[
              "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularly hosts y. Our students are honing their skills on websites like Topcoder, SPOJ, CodeChef, etc. in various languages. Apart from this, students have won many hackathons across the nation.",
            ]}
          />
          <div className="flex justify-center mt-6">
            <a
              href="/technical_clubs.pdf" // Ensure this path matches where you placed the PDF
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
            >
              Click here for more information
            </a>
          </div>
        </div>
        
        );



        case "Industrial Training":
          return (
            <div>
            <CardTwo
              paragraphs={[
                "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding ectively. Our students are honing their skills on websites like Topcoder, SPOJ, CodeChef, etc. in various languages. Apart from this, students have won many hackathons across the nation.",
              ]}
            />
            <div className="flex justify-center mt-6">
              <a
                href="/technical_clubs.pdf" // Ensure this path matches where you placed the PDF
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
              >
                Click here for more information
              </a>
            </div>
          </div>
          
          );
   
          case "Infrastructure":
            return (
              <div>
              <CardTwo
                paragraphs={[
                  "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club the nation.",
                ]}
              />
              <div className="flex justify-center mt-6">
                <a
                  href="/technical_clubs.pdf" // Ensure this path matches where you placed the PDF
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
                >
                  Click here for more information
                </a>
              </div>
            </div>
            
            );






            case "Library":
              return (
                <div>
                <CardTwo
                  paragraphs={[
                    "CIT Kokrajhar has several technical clubs which help students to get expertise in their field of interest and also host regular contests on inter-college levels. The Coding Club (Coding Society of CIT Kokrajhar) and Cyber Security Club of CIT Kokrajhar hold regular training and workshops for computer science engineering. The Robotics club regularlspectively. Our students are honing their skills on websites like Topcoder, SPOJ, CodeChef, etc. in various languages. Apart from this, students have won many hackathons across the nation.",
                  ]}
                />
                <div className="flex justify-center mt-6">
                  <a
                    href="/technical_clubs.pdf" // Ensure this path matches where you placed the PDF
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-lg text-sm bg-blue-600 text-white text-center shadow-lg hover:bg-blue-700 transition"
                  >
                    Click here for more information
                  </a>
                </div>
              </div>
              
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
      <div className="space-y-8 mt-8">
        <div className="flex justify-around">
          <button
            onClick={() => setActiveComponent("The Academic Program")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "The Academic Program" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            The Academic Program
          </button>
          
          <button
            onClick={() => setActiveComponent("Admission Criteria")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "Admission Criteria" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Admission Criteria
          </button>




          <button
            onClick={() => setActiveComponent("Faculty")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "Faculty" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Faculty
          </button>





          <button
            onClick={() => setActiveComponent("R&D Activities")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "R&D Activities" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            R&D Activities
          </button>



           <button
            onClick={() => setActiveComponent("Student Clubs")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "Student Clubs" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Student Clubs
          </button>


          <button
            onClick={() => setActiveComponent("Industrial Training")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "Industrial Training" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Industrial Training
          </button>



          <button
            onClick={() => setActiveComponent("Infrastructure")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "Infrastructure" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Infrastructure
          </button>




         <button
            onClick={() => setActiveComponent("Library")}
            className={`px-4 py-2 rounded-lg ${
              activeComponent === "library" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Library
          </button>






        </div>
        <div>{renderComponent()}</div>
      </div>
    </main>
  );
}
