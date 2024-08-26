"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import path from "path";

const tabs = [
  {
    name: "Home",
    path: "/",
  },
  
  {
    name: "Why CITk",
    path: "/whycitk"
  },

  {
    // Drowdown
    name: "Academic Programme",
    path: "#",
    dropdown: [
      {
        name: "Programme details",
        path: "/courses",
      },
      {
        name: "Student strength",
        path: "/coursestrength",
      },
      
    ],
  },
  {
    name: "Placement Records",
    path: "#",
    dropdown: [
      {
        name: "Placement Records 2023-24",
        path: "/T&P data/T&P Data 23-24.pdf",
      
      },
      {
        name: "Placement Records 2022-23",
        path: "/T&P data/T&P Data 22-23.pdf",
      },
      {
        name: "Placement Records 2021-22",
        path: "/T&P data/T&P Data 21-22.pdf",
      },
      {
        name: "Our Alumni",
        path: "/alumni",
      },
      
    ],
  },
 

  {
    name: "To Recruit",
    path: "#",
    dropdown: [
      {
        name: "Contact Us",
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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-14 sticky top-0 flex justify-between items-center px-4 sm:px-10 z-50 bg-primary text-white shadow-2xl">
      <Link
        href="/"
        className="flex gap-1 items-center h-full"
        onClick={() => setMenuOpen(false)}
      >
        <div className="h-full p-1">
          <Image
            src="/citklogo.png"
            alt="logo"
            height={500}
            width={500}
            className="object-fill h-full w-full"
          />
        </div>
        <h1 className="text-lg sm:text-2xl font-semibold animate-pulse">
          Placement Cell, CITK
        </h1>
      </Link>
      <nav className="w-1/3 sm:w-2/3 flex justify-end">
        <ul
          className={`fixed top-0 left-0 w-full h-full bg-primary flex flex-col items-center justify-center gap-5 transition-transform transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } sm:relative sm:translate-x-0 sm:flex-row sm:bg-transparent sm:h-auto sm:w-auto sm:gap-2`}
        >
          {tabs.map((tab, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
              className={`${
                pathname === tab.path
                  ? "text-white"
                  : "text-slate-200 hover:text-white duration-300"
              } flex justify-center relative duration-500 font-semibold uppercase cursor-pointer py-2`}
            >
              <Link
                href={tab.path}
                className="flex items-center mx-1"
                onClick={() => !tab.dropdown && setMenuOpen(false)}
              >
                {tab.name}
                {tab.dropdown && <FaAngleDown className="text-xl" />}
              </Link>
              {tab.dropdown && hoveredTab === index && (
                <div className="w-48 absolute top-8 bg-slate-100 text-slate-700 text-sm font-semibold rounded-md overflow-hidden shadow-xl p-1">
                  {tab.dropdown.map((dropdownItem, dropdownIndex) => (
                    <Link
                      href={dropdownItem.path}
                      key={dropdownIndex}
                      onClick={() => setMenuOpen(false)}
                    >
                      <span className="block px-1 py-1 hover:bg-slate-300 rounded-md hover:font-bold duration-300">
                        {dropdownItem.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <button
          className="sm:hidden text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
}
