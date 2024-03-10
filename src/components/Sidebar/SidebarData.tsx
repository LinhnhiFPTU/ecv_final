// SidebarData.tsx
"use client"
import React from "react";
import Sidebar from "./Sidebar";

const SidebarData = () => {
  const sampleData = [
    {
      title: "Home",
      path: "/",
      cName: "nav-text",
    },
    {
      title: "Sale Task",
      path: "/sale-task",
      cName: "nav-text",
    },
    {
      title: "Tech Task",
      path: "/tech-task",
      cName: "nav-text",
    }
  ];
  
  const sideElements = sampleData.map((sideData, index) => (
    <div key={index} className="col-span-1 px-2 flex justify-center items-center">
      <Sidebar {...sideData} />
    </div>
  ));

  return <div className="bg-whiteBlue text-mainBlue w-fit">{sideElements}</div>;
};

export default SidebarData;
