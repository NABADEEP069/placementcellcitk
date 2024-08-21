import { FaGoogleDrive } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface RecruitmentFormProps {
  setShowRecruitmentForm: (value: boolean) => void;
}

export default function RecruitmentForm({
  setShowRecruitmentForm,
}: RecruitmentFormProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="absolute top-0 left-0 w-full h-full z-40 flex justify-center items-center">
        <div className="bg-black bg-opacity-85 sm:w-5/6 sm:h-5/6 rounded-lg relative p-10 flex flex-col items-center justify-between">
          <button
            onClick={() => setShowRecruitmentForm(false)}
            className="absolute right-3 top-2"
          >
            <IoMdCloseCircleOutline className="text-4xl text-red-500 hover:scale-110 duration-200" />
          </button>
          <div>
            <h5 className="text-4xl font-bold capitalize text-center">
              Invitation to Recruiters: Engage with Our Talent for the 2024-25
              Placement & Internship Season
            </h5>
            <p className="text-center text-xl text-blue-200 font-semibold mt-1">
              (Recruiters are requested to fill out the forms below for the
              Placement & Internship programs.)
            </p>
          </div>
          <div className="w-full h-12 flex justify-center items-center gap-10 text-sm font-bold">
            <button className="bg-primary px-5 py-2 rounded-md border-2 uppercase hover:bg-white hover:text-black hover:border-primary hover:scale-105 duration-300 bg-opacity-90 ">
              <a href="#" target="_blank" className="flex items-center gap-2">
                <FaGoogleDrive className="text-lg" />
                Placement Form
              </a>
            </button>
            <button className="bg-primary px-5 py-2 rounded-md border-2 uppercase hover:bg-white hover:text-black hover:border-primary hover:scale-105 duration-300 bg-opacity-90 flex items-center gap-2">
              <a href="#" target="_blank" className="flex items-center gap-2">
                <FaGoogleDrive className="text-lg" />
                Internship Form
              </a>
            </button>
          </div>
          <div className="bg-slate-200 shadow-md rounded-lg p-4">
            <p className="text-gray-800 text-lg leading-relaxed">
              We extend a warm invitation to all esteemed recruiters and
              organizations to participate in the Placement Drive for Final year
              B.Tech and M.Tech students, as well as the Internship Drive for
              Pre-final and Final year students, for the season 2024-25. At CIT
              Kokrajhar, we take immense pride in our student&apos;s academic
              excellence, practical skills, and dedication to becoming future
              leaders in their respective fields.
              <br />
              Once you register our team will contact you soon. For any further
              information or clarification, please feel free to reach out to our
              Placement Cell at{" "}
              <a
                href="mailto:tnpcell@cit.ac.in"
                className="text-blue-500 hover:underline"
              >
                tnp@cit.ac.in
              </a>{" "}
              or Contact our respective TPC&apos;s. Thank you for considering
              Central Institute of Technology Kokrajhar as your preferred
              destination for recruitment and internships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
