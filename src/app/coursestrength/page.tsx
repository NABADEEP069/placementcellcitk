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
    name: "Diploma Programme",
    courses: [
      {
        name: "Electronics and Communication Engineering (ECE)",
        male: 30,
        female: 20,
        strength: 50,
      },
      {
        name: "Computer Science and Engineering (CSE)",
        male: 25,
        female: 15,
        strength: 40,
      },
      {
        name: "Control and Instrumentation (CAI)",
        male: 20,
        female: 20,
        strength: 40,
      },
      {
        name: "Food Processing Technology (FPT)",
        male: 22,
        female: 18,
        strength: 40,
      },
      { name: "Civil Engineering (CE)", male: 30, female: 10, strength: 40 },
      {
        name: "Animation & Multimedia Technology (AMT)",
        male: 20,
        female: 20,
        strength: 40,
      },
    ],
  },
  {
    name: "Undergraduate Programme",
    courses: [
      {
        name: "Computer Science & Engineering",
        male: 60,
        female: 47,
        strength: 107,
      },
      {
        name: "Electronics & Communication Engineering",
        male: 30,
        female: 19,
        strength: 49,
      },
      { name: "Civil Engineering", male: 50, female: 27, strength: 77 },
      {
        name: "Food Engineering & Technology",
        male: 15,
        female: 14,
        strength: 29,
      },
      {
        name: "Instrumentation Engineering",
        male: 25,
        female: 16,
        strength: 41,
      },
      {
        name: "Multimedia Communication & Design",
        male: 10,
        female: 10,
        strength: 20,
      },
    ],
  },
  {
    name: "Masters Programme",
    courses: [
      { name: "Computer Science", male: 20, female: 10, strength: 30 },
      { name: "Mechanical Engineering", male: 15, female: 5, strength: 20 },
      { name: "Chemical Engineering", male: 40, female: 20, strength: 60 },
      { name: "Chemical Engineering", male: 40, female: 20, strength: 60 },
    ],
  },
];

const CourseStrengthPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Course Strength</h1>
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
