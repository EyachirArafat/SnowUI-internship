import React, { useState } from "react";
import { TopBar } from "../myBar/TopBar";
import { Outlet } from "react-router-dom";
import { LeftSideBar2 } from "./myBar2/LeftSideBar2";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineHistory } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

export const MyBar2 = () => {
  const [isLeftSidebar, setIsLeftSidebar] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebar(!isLeftSidebar);
  };

  return (
    <div className="flex min-h-screen">
      {!isLeftSidebar && <LeftSideBar2 />}

      <div
        className={`flex flex-col ${
          !isLeftSidebar
            ? "md:w-[75%] md2:w-[80%] md2:ml-[20%] w-full md:ml-[25%]"
            : "mx-auto md2:w-[65%] md2:ml-[15%]"
        }`}
      >
        {/* TopBar */}
        <TopBar
          toggleLeftSidebar={toggleLeftSidebar}
          BCPath1="Dashboards"
          BCPath2="Overview"
          RCollapseClass="hidden"
          TBclass={`left-[0%] ${
            !isLeftSidebar
              ? "md:w-[75%] md:left-[25%] md2:w-[80%] md2:left-[20%] "
              : "md:w-full md:left-[0%] md:ml-[0%] md2:w-[65%] md2:left-[15%] "
          }`}
        />

        {/* Main Content */}
        <div className="sm:pt-20 pt-28 py-6 space-y-4 dark:text-white overflow-y-auto flex-grow">
          <div className="p-4 rounded">
            <Outlet />
          </div>
        </div>

        <div className={`p-6 dark:text-white text-black bg-white dark:bg-black/50 fixed bottom-0 left-0 md2:w-[65%] md2:ml-[15%] ${!isLeftSidebar ? "md:w-[75%] w-full md:ml-[25%]" : "mx-auto"}`}>

          <div className="md:hidden flex justify-between items-center">
          <AiFillHome />
          <MdOutlineHistory />
          <FaBell />
          <IoSettingsSharp />
          <div>
            <img src="/profile-pic.svg" alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
