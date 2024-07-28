import React from "react";

interface Course {
  name: string;
  strength: number;
}

interface Module {
  name: string;
  courses: Course[];
}

const modules: Module[] = [
  {
    name: "B.Tech",
    courses: [
      { name: "Computer Science", strength: 120 },
      { name: "Mechanical Engineering", strength: 80 },
      { name: "Electrical Engineering", strength: 100 },
      { name: "Civil Engineering", strength: 70 },
      { name: "Chemical Engineering", strength: 60 },
    ],
  },
  {
    name: "Diploma",
    courses: [
      { name: "Civil Engineering", strength: 50 },
      { name: "Mechanical Engineering", strength: 40 },
    ],
  },
  {
    name: "Master",
    courses: [
      { name: "Computer Science", strength: 30 },
      { name: "Mechanical Engineering", strength: 20 },
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
                      Strength
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
