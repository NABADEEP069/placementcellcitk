import InfoCard from "@/components/common/infocard";
import teamData from "@/data/teamdata.json";
export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="bg-blue-100 flex px-10 py-5">
        <div className="w-1/3 flex items-center">
          <h1 className="text-5xl text-center">TPO & Faculty Members</h1>
        </div>
        <div className="w-2/3 grid grid-cols-2">
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
      </div>
    </main>
  );
}
