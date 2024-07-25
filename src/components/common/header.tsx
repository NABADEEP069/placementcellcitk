"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import path from "path";

const tabs = [
  {
    name: "Home",
    path: "/",
  },
  {
    // Drowdown
    name: "Academics",
    path: "#",
    dropdown: [
      {
        name: "Courses",
        path: "/courses",
      },
      {
        name: "Course Strength",
        path: "/course-strength",
      },
      {
        name: "MOU's",
        path: "/mou",
      },
    ],
  },
  {
    name: "Recruiters",
    path: "/recruiters",
  },
  {
    // Dropdown
    name: "Why Us",
    path: "#",
    dropdown: [
      {
        name: "Why CITK",
        path: "/whycitk",
      },
      {
        name: "Demographics",
        path: "/demographics",
      },
      {
        name: "Technical Clubs",
        path: "/clubs",
      },
      {
        name: "Alumni",
        path: "/alumni",
      },
    ],
  },
  {
    name: "Procedure",
    path: "/procedure",
  },
  {
    name: "Contact Us",
    path: "#",
    dropdown: [
      {
        name: "Our Team",
        path: "/contact",
      },
      {
        name: "How to Reach",
        path: "/reach",
      },
      {
        name: "Facilities",
        path: "/facilities",
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [hoveredTab, setHoveredTab] = useState<number | null>(null);

  return (
    <header className="h-14 sticky top-0 sm:flex justify-between items-center px-10 z-50 bg-primary text-white shadow-2xl">
      {/* <div> */}
      <Link href={"/"} className="flex gap-1 items-center h-full">
        <div className="h-full p-1">
          <Image
            src={"/citklogo.png"}
            alt="logo"
            height={500}
            width={500}
            className="object-fill h-full w-full"
          />
        </div>
        <h1 className="text-2xl font-semibold animate-pulse">
          Placement Cell, CITK
        </h1>
      </Link>
      {/* </div> */}
      <nav className="w-2/3 flex justify-end">
        <ul className="flex items-center gap-5">
          {tabs.map((tab, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`${
                pathname === tab.path
                  ? "text-white"
                  : "text-blue-200 hover:text-white duration-300"
              } flex justify-center relative duration-500 font-semibold uppercase cursor-pointe py-2`}
            >
              <Link href={tab.path} className="">
                <div className="flex items-center gap-1">
                  {tab.name}
                  {tab.dropdown && <FaAngleDown className="text-xl" />}
                </div>
              </Link>
              {tab.dropdown && hoveredTab === index && (
                <div className="w-48 absolute top-8 bg-[#b7e2f2] text-slate-700 text-sm font-semibold rounded-md overflow-hidden shadow-xl p-1">
                  {tab.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link href={dropdownItem.path} key={dropdownIndex}>
                      <span className="block px-1 py-1 hover:bg-[#5ebfe2]  rounded-md hover:font-bold duration-300">
                        {dropdownItem.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
