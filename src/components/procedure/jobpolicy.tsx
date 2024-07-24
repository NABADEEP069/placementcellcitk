export default function JobPolicy() {
  return (
    <div className="bg-gray-100 p-5 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Job Policy</h2>
      <p className="mb-4">
        Companies visit campus and select students as per their recruitment
        drive.
      </p>
      <p className="mb-4 font-semibold">
        To a student finally selected by a company after all testing and
        interview rounds, the company may offer:
      </p>
      <div>
        <h3 className="font-semibold mb-2 uppercase text-xl text-primary">
          Full Time Job Offer
        </h3>
        <ul className="list-disc space-y-2 pl-5 mb-4">
          <li className="bg-white p-3 rounded-lg shadow">
            The selected student will join the company in June 2024 as a
            full-time employee.
          </li>
        </ul>
        <h3 className="font-semibold mb-2 uppercase text-xl text-primary">
          Internship Opportunities
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li className="bg-white p-3 rounded-lg shadow">
            <strong>B. Tech 3rd Year Students:</strong> Eligible for a 2-month
            summer internship. The student will join the company during the
            summer/winter breaks as an intern for a period of 2 months.
          </li>
          <li className="bg-white p-3 rounded-lg shadow">
            <strong>B. Tech 4th Year Students:</strong> Eligible for a 2-month
            internship. The student will join the company as an intern for a
            period of 2 months.
          </li>
        </ul>
      </div>
    </div>
  );
}
