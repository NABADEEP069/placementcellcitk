"use client";

import { useState } from "react";

// Define the types for the props
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
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-5">
        <h3 className="text-xl font-bold mb-3">{name}</h3>
        <button
          onClick={toggleDropdown}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          {isOpen ? "Hide Details" : "View Core Subjects"}
        </button>
        {isOpen && (
          <ul className="mt-3">
            {subjects.map((subject, index) => (
              <li key={index} className="text-gray-700">
                - {subject}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const btechCourses = [
  {
    name: "B.tech in Computer Science & Engineering.",
    subjects: ["AI", "Machine Learning", "Block chain", "Data structure and algorithm","Database management system","Computer architecture","Automata theory"],
  },
  {
    name: "B.tech in Electronics & Communication Engineering.",
    subjects: ["VLSI Design", "Power Electronics", "Signal and Systems", "Control Systems"],
  },
  {
    name: "B.tech in Civil Engineering.",
    subjects: ["Geotechnical engineering", "Building materials", "Design of structures and RCC", "Autocad"],
  },
  {
    name: "B.tech in Food Engineering & Technology.",
    subjects: ["Food Process Engineering", "Principles of Food Processing and Preservation", "Food Product Technology", "Food Packaging Technology","Food Analysis, Quality Control and Management"],
  },
  {
    name: "B.tech in Instrumentation Engineering.",
    subjects: ["CONTROL SYSTEMS", "EMBEDDED SYSTEMS", "MICROPROCESSOR & MICROCONTROLLER", "ELECTRONIC INSTRUMENTATION","PROCESS CONTROL","BIOMEDICAL INSTRUMENTATION"],
  },
  {
    name: "B. des in Multimedia Communication & Design.",
    subjects: ["Data Structures", "Algorithms", "Operating Systems", "Networks"],
  },
  
  
  
];

const mtechCourses = [
  {
    name: "M.tech in Computer Science & Engineering",
    subjects: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
  },
  {
    name: "M.tech in Food Engineering & Technology",
    subjects: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
  },
  {
    name: "M.tech in Green Energy Technology (GET)",
    subjects: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
  },
  {
    name: "M.tech in Water Resources and Hydraulic Engineering (WRH)",
    subjects: ["Advanced Algorithms", "Machine Learning", "Cloud Computing"],
  },
  
];

const diplomaCourses = [
  {
    name: "Diploma in Computer Science and Engineering (CSE)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  {
    name: "Diploma in Electronics and Communication Engineering (ECE)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  {
    name: "Diploma in Control and Instrumentation (CAI)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  {
    name: "Diploma in Food Processing Technology (FPT)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  {
    name: "Diploma in Civil Engineering (CE)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  {
    name: "Diploma in Animation & Multimedia Technology (AMT)",
    subjects: ["Analog Electronics", "Digital Systems", "Microprocessors"],
  },
  
  
];

export default function Page() {
  return (
    <main className="min-h-screen py-5">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center">Courses</h1>

        <div className="px-5 sm:px-10 mb-10 mt-5">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Undergraduate Programs
          </h2>
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

        <div className="px-5 sm:px-10 mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Masters Programs
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

        <div className="px-5 sm:px-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-5">
            Diploma Programs
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
