import React from "react";

interface Course {
  name: string;
  male: number;
  female: number;
  strength: number;
}

interface Module {
  name: string;
  courses: Course[];
}

const modules: Module[] = [
 
  {
    name: "Undergraduate Programme",
    courses: [
      {
        name: "Computer Science & Engineering",
        male: 81,
        female: 26,
        strength: 107,
      },
      {
        name: "Electronics & Communication Engineering",
        male: 38,
        female: 11,
        strength: 49,
      },
      { name: "Civil Engineering", male: 54, female: 23, strength: 77 },
      {
        name: "Food Engineering & Technology",
        male: 20,
        female: 9,
        strength: 29,
      },
      {
        name: "Instrumentation Engineering",
        male: 31,
        female: 10,
        strength: 41,
      },
      {
        name: "Multimedia Communication & Design",
        male: 15,
        female: 5,
        strength: 20,
      },
    ],
  },
   {
    name: "Diploma Programme",
    courses: [
      {
        name: "Electronics and Communication Engineering (ECE)",
        male: 16,
        female: 2,
        strength: 18,
      },
      {
        name: "Computer Science and Engineering (CSE)",
        male: 24,
        female: 8,
        strength: 32,
      },
      {
        name: "Control and Instrumentation (CAI)",
        male: 9,
        female: 4,
        strength: 13,
      },
      {
        name: "Food Processing Technology (FPT)",
        male: 2,
        female: 3,
        strength: 5,
      },
      { name: "Civil Engineering (CE)", male: 25, female: 8, strength: 33 },
      {
        name: "Animation & Multimedia Technology (AMT)",
        male: 1,
        female: 2,
        strength: 3,
      },
    ],
  },
  {
    name: "Masters Programme",
    courses: [
      {
        name: "Computer Science and Engineering", strength: 2,
        male: 2,
        female: 0
      },
      {
        name: "Food Engineering and Technology (FET)", strength: 4,
        male: 1,
        female: 3,
      },
      {
        name: "Green Energy Technology (GET)", strength: 1,
        male: 0,
        female: 1,
      },
      {
        name: "Water Resources and Hydraulic Engineering (WRH)", strength: 13,
        male: 10,
        female: 3
      },
      {
        name: "Master of Design (M. Des)", strength: 8,
        male: 6,
        female: 2,
      }
    ],
  },
];

const CourseStrengthPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Student  Strength ( Final Year 2024-25 )</h1>
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              {module.name}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">
                      Course Name
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">
                      Male
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">
                      Female
                    </th>
                    <th className="py-2 px-4 border-b-2 border-gray-300 text-left">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {module.courses.map((course, courseIndex) => (
                    <tr key={courseIndex} className="hover:bg-gray-100">
                      <td className="py-2 px-4 border-b border-gray-300">
                        {course.name}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {course.male}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {course.female}
                      </td>
                      <td className="py-2 px-4 border-b border-gray-300">
                        {course.strength}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseStrengthPage;
