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
    name: "Civil Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Food Engineering & Technology",
    imageUrl: "/cit-logo.png",
  },
];

const diplomaCourses = [
  {
    name: "Electrical Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Civil Engineering",
    imageUrl: "/cit-logo.png",
  },
  {
    name: "Computer Engineering",
    imageUrl: "/cit-logo.png",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen  py-5">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center">Courses</h1>

        <div className="px-10 mb-10 mt-5">
          <h2 className="text-4xl font-bold text-center mb-5">
            B.Tech Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {btechCourses.map((course, index) => (
              <ClubCard
                key={index}
                name={course.name}
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="px-10 mb-10">
          <h2 className="text-4xl font-bold text-center mb-5">
            M.Tech Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {mtechCourses.map((course, index) => (
              <ClubCard
                key={index}
                name={course.name}
                imageUrl={course.imageUrl}
              />
            ))}
          </div>
        </div>

        <div className="px-10">
          <h2 className="text-4xl font-bold text-center mb-5">
            Diploma Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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
