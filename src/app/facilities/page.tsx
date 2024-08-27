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
        The campus of CIT Kokrajhar is situated at the heart of Kokrajhar city
        providing fast connectivity to railway and airport. The nearest railway
        station is Kokrajhar, which is at a distance of 10 km from the campus
        and the nearest airport is Rupsi Airport, which is approx 75 km from the
        campus.
      </p>
      <p className="max-w-2xl mb-8 text-center">
        The facilities provided for the placement process includes:
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
