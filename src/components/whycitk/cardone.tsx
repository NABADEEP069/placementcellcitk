const academicprogramdata = [
  {
    title: "Teaching Methodology",
    info: "Great emphasis during the classes is laid on core fundamentals and concepts. The examinations are designed to reflect the understanding of the fundamentals in practical fields. In the classroom, instructors engage students in discussions that challenge their understanding, prompting them to think critically about the material. Problem-solving sessions, case studies, and collaborative projects are integral to the learning process, enabling students to apply theoretical knowledge to practical scenarios.",
  },
  {
    title: "Teaching Assistantship",
    info: "Meritorious Post-graduate students are offered teaching assistantship which involves assisting instructors in practically everything related to the course like conducting lectures, laboratory sessions, tutorials and course planning.",
  },
  {
    title: "Departmental and Institute Electives",
    info: "In order to boost interest in other faculties of technology, the students can take up electives and/or audit courses from department other than their core area of specialization.",
  },
  {
    title: "Industrial Exposure",
    info: "Students are exposed to latest industry practices through several industrial visits during their course. Students are also encouraged to undergo industrial training during their summer vacations.", 
  },
  {
    title: "Institute programs",
    info: "To encourage the faculty and student interaction, we organize various seminars, lectures and workshops. Through these the students get an opportunity to interact with eminent personalities from the corporate world and the academia.",
  },
  
];

export default function CardOne() {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow">
      {academicprogramdata.map((data, index) => (
        <div key={index}>
          <h3 className="font-semibold mb-2 uppercase text-xl text-primary">
            {data.title}
          </h3>
          <p className="bg-white p-3 rounded-lg shadow mb-4 pl-5 space-y-2">
            {data.info}
          </p>
        </div>
      ))}
    </div>
  );
}
