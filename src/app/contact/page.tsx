import InfoCard from "@/components/common/infocard";
import teamData from "@/data/teamdata.json";
export default function Page() {
  return (
    <main className="min-h-screen p-5 space-y-5">
      <section className="bg-gradient-to-r from-teal-100 to-blue-50 flex px-7 py-5 rounded-lg">
        <div className="w-1/3 flex items-center">
          <h1 className="text-5xl text-center">TPO & Faculty Members</h1>
        </div>
        <div className="w-5/6 grid grid-cols-3 gap-5">
          {teamData.TPOAndFacultyMembers.map((member) => (
            <InfoCard
              key={member.email} // Assuming email is unique, it can be used as a key
              imageUrl={member.imageUrl}
              altText={member.altText}
              name={member.name}
              role={member.role}
              email={member.email}
              githubUrl={member.githubUrl}
              linkedinUrl={member.linkedinUrl}
              phone={member.phone}
            />
          ))}
        </div>
      </section>
      <section className="px-16 py-5 space-y-5 bg-gradient-to-r from-blue-100 to-teal-200 rounded-lg">
        {/* <div className=""> */}
        <h1 className="text-5xl text-center">Student Co-ordinators</h1>
        {/* </div> */}
        <div className="grid grid-cols-4 gap-5">
          {teamData.StudentCoordinators.map((member) => (
            <InfoCard
              key={member.email} // Assuming email is unique, it can be used as a key
              imageUrl={member.imageUrl}
              altText={member.altText}
              name={member.name}
              role={member.role}
              email={member.email}
              githubUrl={member.githubUrl}
              linkedinUrl={member.linkedinUrl}
              phone={member.phone}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
