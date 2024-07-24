"use client";
import React, { useState } from "react";
import JobPolicy from "@/components/procedure/jobpolicy";
import PlacementProc from "@/components/procedure/palcementproc";
import PlacementPolicy from "@/components/procedure/palcementpolicy";

export default function Page() {
  const [activeComponent, setActiveComponent] = useState("PlacementProc");

  // Function to determine button style based on active component
  const getButtonClass = (componentName: string) => {
    return `text-left w-full py-2 px-4 transition-colors duration-150 uppercase border-l-4 rounded-full  ${
      activeComponent === componentName
        ? "text-primary font-bold  border-primary"
        : "hover:text-primary hover:font-semibold border-transparent"
    }`;
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "PlacementProc":
        return <PlacementProc />;
      case "JobPolicy":
        return <JobPolicy />;
      case "PlacementPolicy":
        return <PlacementPolicy />;
      default:
        return null; // Or any default component or message
    }
  };

  return (
    <main className="min-h-screen flex px-10 py-7 gap-2">
      <div className="w-72">
        <button
          className={getButtonClass("PlacementProc")}
          onClick={() => setActiveComponent("PlacementProc")}
        >
          Placement Procedure
        </button>
        <button
          className={getButtonClass("JobPolicy")}
          onClick={() => setActiveComponent("JobPolicy")}
        >
          Job Policy
        </button>
        <button
          className={getButtonClass("PlacementPolicy")}
          onClick={() => setActiveComponent("PlacementPolicy")}
        >
          Placement Policy
        </button>
      </div>
      <div className="w-5/6 rounded-lg">{renderComponent()}</div>
    </main>
  );
}
