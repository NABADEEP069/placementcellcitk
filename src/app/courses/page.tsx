import ClubCard from "@/components/whycitk/clubcard";

const btechCourses = [
  {
    name: "Computer Science & Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Electronics & Communication Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Civil Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Food Engineering & Technology",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Instrumentation Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Multimedia Communication & Design",
    imageUrl: "/cit-logo.png",
  },
];

const mtechCourses = [
  {
    name: "Computer Science & Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Food Engineering & Technology",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Green Energy Technology (GET)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Water Resources and Hydraulic Engineering (WRH)",
    imageUrl: "/cit-logo.png",
  },
];

const diplomaCourses = [
  {
    name: "Electronics and Communication Engineering (ECE)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Computer Science and Engineering (CSE)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Control and Instrumentation (CAI)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Food Processing Technology (FPT)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Civil Engineering (CE)",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Animation & Multimedia Technology (AMT)",
    imageUrl: "/cit-logo.png",
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
                imageUrl={course.imageUrl}
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
                imageUrl={course.imageUrl}
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
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
