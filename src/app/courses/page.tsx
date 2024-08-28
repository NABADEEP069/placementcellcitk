"use client";

import { useState } from "react";

interface ClubCardProps {
  name: string;
  subjects: string[];
}

function ClubCard({ name, subjects }: ClubCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <div className="flex-grow p-3">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        {isOpen && (
          <ul className="mt-3">
            {subjects.map((subject, index) => (
              <li key={index} className="text-gray-900">
                * {subject}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mb-5 mx-5"
      >
        {isOpen ? "Hide Details" : "View Core Subjects"}
      </button>
    </div>
  );
  
  
}

const btechCourses = [
  {
    name: "B.tech in Computer Science and Engineering",
    subjects: ["Data structure and algorithm", "Database management system","AI", "Machine Learning", "Block chain", "Computer architecture","Automata theory"],
  },
  {
    name: "B.tech in Electronics and Communication Engineering",
    subjects: [" In VLSI & Embadedd System: Digital System Design, VLSI Design, Linear IC, Analog IC Design Microcontrollers.", "In Communication Systems : Analog Communication, Digital CCommunication, Computer Networks, Antennas & Wave Propagation and Information theory and Coding.", " In Signal Processing : Signal and Systems, Digital Signal Processing", ],
  },
  {
    name: "B.tech in Civil Engineering ",
    subjects: ["Geotechnical engineering", "Building materials", "Design of structures and RCC", "Autocad"],
  },
  {
    name: "B.tech in  Food Engineering and Technology",
    subjects: ["Food Process Engineering", "Principles of Food Processing and Preservation", "Food Product Technology", "Food Packaging Technology","Food Analysis, Quality Control and Management"],
  },
  {
    name: "B.tech in Instrumentation Engineering",
    subjects: ["CONTROL SYSTEMS", "EMBEDDED SYSTEMS", "MICROPROCESSOR & MICROCONTROLLER", "ELECTRONIC INSTRUMENTATION","PROCESS CONTROL","BIOMEDICAL INSTRUMENTATION"],
  },
  {
    name: "B. des in Multimedia Communication and Design",
    subjects: ["3D Modeling", "Graphic Design", "UI/UX Design", "Design studio","Introduction to game design","Animation Production design"],
  },
  
  
  
];

const mtechCourses = [
  {
    name: "M.tech in Computer Science & Engineering",
    subjects: ["Advanced DBMS", "Machine Learning", "Advanced Computer Network","Artificial Intelligence","Data Mining and Data Warehousing."],
  },
  {
    name: "M.tech in Food Engineering & Technology",
    subjects: ["Research Methodology and IPR", "Recent Trends in Food Engineering and Technology", "Recent Advances in Enzyme and Microbial Technology","Emerging Food Processing Technologies","Recent Trends in Food Safety and Quality Management"],
  },
  {
    name: "M.tech in Green Energy Technology (GET)",
    subjects: ["Green Energy Technology", "Energy & Environment","Fundamentals of Energy Technology","Energy Management & Auditing","Numerical Methods for Energy Systems","Power Plant Engineering","Fuels & Combustions","Bio-energy & Conversion Systems","Wind and Hydro Power Systems","Solar Thermal Energy Conversions"],
  },
  {
    name: "M.tech in Water Resources and Hydraulic Engineering (WRH)",
    subjects: ["Research Methodology", "Water resources systems analysis", "Hydropower engineering","Human resource Management for water resources projects","Human resource Management for water resources projects","Advanced computational hydraulics"],
  },
  {
    name: "M.Des in Multimedia Communication & Design ",
    subjects: ["Multimedia Communication & Design", "Understanding Aesthetics: Analytical studies","Game Design for digital media","Animation & Visual Effects","Animation Production Techniques","3D Sculpture & Visualization Techniques"],
  },
  
];

const diplomaCourses = [
  {
    name: "Diploma in Computer Science and Engineering (CSE)",
    subjects: ["System Programming", "Computer Architecture and Organization", "Operating System","Database Management Systems","Cryptography & Network Security","Software Engineering"],
  },
  {
    name: "Diploma in Electronics and Communication Engineering (ECE)",
    subjects: ["Electronic Devices and Circuits", "1 Microcontroller and Applications", "Digital Electronicss","Embedded Systems","Mobile and Wireless Communication","Power Electronics","Electronic Measurements and Instrumentation"],
  },
  {
    name: "Diploma in Control and Instrumentation (CAI)",
    subjects: ["Electrical Circuits and Networks", "Electronics Devices and Circuits", "Microprocessors","Control Systems","Biomedical Instrumentation","Industrial Instrumentation"],
  },
  {
    name: "Diploma in Food Processing Technology (FPT)",
    subjects: ["FOOD PRODUCT TECHNOLOG", "BASICS OF FOOD CHEMISTRY", "FOOD STORAGE AND PACKAGINGs","FOOD QUALITY CONTROL","ELEMENTS OF FOOD ENGINEERING"],
  },
  {
    name: "Diploma in Civil Engineering (CE)",
    subjects: ["Construction Materials", "Surveying", "Water Supply & Sanitary Installation","Structural Analysis","Construction Technology","Concrete Technology","Design of steel structures","Design of RCC Structures"],
  },
  {
    name: "Diploma in Animation & Multimedia Technology (AMT)",
    subjects: ["Art Fundamentals and Graphics Design", "2D Animation Techniques", "3D Animation","Introduction to Multimedia Design ","Audio Video Editing","Lighting in Animation","Compositing & Visual Effects"],
  },
  
  
];

export default function Page() {
  return (
    <main className="min-h-screen py-5">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center">Courses</h1>

        <div className="px-5 sm:px-2 mb-10 mt-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Undergraduate Programs
          </h2>
          <h4 className="text-1xl sm:text-1xl font-bold text-center mb-1">
           CIT Kokrajhar Offers  Undergraduate Programs in Computer Science and Engineering(CSE), Electronics and Communication Engineering (ECE), Civil Engineering (CE), Food Engineering and Technology(FET), Instrumentation Engineering(IE) and Multimedia Communication and Design(MCD).
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
            {btechCourses.map((course, index) => (
              <ClubCard
                key={index}
                name={course.name}
                subjects={course.subjects}
              />
            ))}
          </div>
        </div>

        <div className="px-5 sm:px-2 mb-10 mt-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Masters Programs
          </h2>
          <h2 className="text-1xl sm:text-1xl font-bold text-center mb-1">
          CIT Kokrajhar provides Master's programs in Computer Science & Engineering (CSE), Food Engineering & Technology (FET), Green Energy Technology (GET), and Water Resources, Hydraulic Engineering (WRH) and Multimedia Communication & Design (MCD).
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
            {mtechCourses.map((course, index) => (
              <ClubCard
                key={index}
                name={course.name}
                subjects={course.subjects}
              />
            ))}
          </div>
        </div>

        <div className="px-5 sm:px-2 mb-10 mt-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Diploma Programs
          </h2>
          <h2 className="text-1xl sm:text-1xl font-bold text-center mb-1">
          CIT Kokrajhar provides Diploma Programs in Computer Science and Engineering (CSE), Electronics and Communication Engineering (ECE), Control and Instrumentation (CAI), Food Processing Technology (FPT), Civil Engineering (CE), Animation & Multimedia Technology (AMT).

          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10">
            {diplomaCourses.map((course, index) => (
              <ClubCard
                key={index}
                name={course.name}
                subjects={course.subjects}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
