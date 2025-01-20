import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { cn } from "../../../utils/lib/cn";
import { leftSidebarData2 } from "../../../utils/data/apiData";
export const LeftSideBar2 = ({className}) => {
  return (

      <div className={cn("h-screen fixed top-0 left-0 md2:w-[20%] md:w-[25%]  dark:text-white shadow-lg border-r dark:border-r-bg5/10  md:flex hidden flex-col", className)}>
        {/* Sidebar Header */}
        <NavLink to="/">
          <div className="pl-6 py-7">
            <img className="max-w-[153px] w-[120px]" src="/SnowUI-Logo.svg" alt="SnowUI-Logo" />
          </div>
        </NavLink>

        {/* Sidebar Content */}
        <div className="overflow-y-auto ">
          <div className="">
            
            {leftSidebarData2.map((section, id)=>(
              <NavLink
                  key={id}
                  className={({ isActive }) =>
                    `block text-nowrap p-2 pl-5 mb-1 mx-2 hover:bg-bg1 hover:dark:bg-bg5/15 rounded-md ${
                      isActive ? "bg-slate-200 dark:bg-bg5/15 dark:text-white" : ""
                    }`
                  }
                  to={`/${section.title
                    ?.toLowerCase()
                    .replace(/[^a-z0-9\s]/g, "")
                    .replace(/\s+/g, "-")}`}
                >
                  <div className="flex gap-3 items-center group">
                    <p className="bg-white dark:bg-bg5/15 p-2 rounded-xl">{section.icon}</p>
                    <p className="group-hover:translate-x-2 transition-all duration-200">{section.title}</p>
                  </div>
                </NavLink>

                      
            ))}
           
          </div>
        </div>
        <div className="flex gap-2 items-center py-7 bg-white dark:bg-transparent mt-auto justify-center ">
           <img src="/profile-pic.svg" alt="profile-pic.svg" />
           <h3 className="text-t14 font-medium ">ByeWind</h3>
        </div>
      </div>
    
  )
}


