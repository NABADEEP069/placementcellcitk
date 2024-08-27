import React from "react";
import Image from "next/image";

const facilities = [
  {
    title: "Fully furnished AC rooms for interview",
    imageUrl: "/Facilities/acroom.jpeg",
  },
  {
    title: "Seminar Hall for PPT",
    imageUrl: "/Facility/F-3.jpg",
  },
  {
    title: "Guest House for recruiters",
    imageUrl: "/Facility/guest-house photo- citk - Copy.jpg",
  },

  
];

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Facilities</h1>
      <p className="max-w-2xl mb-8 text-center">
      CIT Kokrajhar provides excellent facilities for recruiters visiting the campus. The institute offers a comfortable guest house for accommodation, ensuring a pleasant stay. For presentations and pre-placement talks, spacious and well-equipped seminar halls are available. Additionally, air-conditioned rooms are provided for conducting interviews, ensuring a professional and comfortable environment for recruiters. These facilities, combined with the institute's supportive staff, create an efficient and welcoming experience for companies during their campus visits.
      </p>
     
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={facility.imageUrl}
                alt={facility.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">
                {facility.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <p className="max-w-2xl mt-8 text-center">
        The placement office ensures its best hospitality to the recruiters.
        Accommodation and conveyance can be arranged by the institute on prior
        notification.
      </p>
    </main>
  );
}
