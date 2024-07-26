import InfoCard from "@/components/common/infocard";
import teamData from "@/data/teamdata.json";

export default function Page() {
  const [firstMember, ...otherMembers] = teamData.TPOAndFacultyMembers;

  return (
    <main className="min-h-screen p-5 space-y-5">
      <section className="bg-gradient-to-r from-teal-100 to-blue-50 flex flex-col items-center px-7 py-5 rounded-lg">
        <div className="w-full flex justify-center mb-5">
          <h1 className="text-5xl text-center">TPO & Faculty Members</h1>
        </div>

        <div className="w-full flex justify-center mb-5">
          <InfoCard
            key={firstMember.email}
            imageUrl={firstMember.imageUrl}
            altText={firstMember.altText}
            name={firstMember.name}
            role={firstMember.role}
            email={firstMember.email}
            githubUrl={firstMember.githubUrl}
            linkedinUrl={firstMember.linkedinUrl}
            phone={firstMember.phone}
          />
        </div>

        <div className="w-5/6 grid grid-cols-3 gap-5">
          {otherMembers.map((member) => (
            <InfoCard
              key={member.email}
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
        <h1 className="text-5xl text-center">Student Co-ordinators</h1>
        <div className="grid grid-cols-3 gap-5">
          {teamData.StudentCoordinators.map((member) => (
            <InfoCard
              key={member.email}
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
