import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { leftSidebarData } from "../../utils/data/apiData";
import LinkOfItem from "../common/LinkOfItem";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/lib/cn";

export const LeftSideBar = ({className}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (id) => {
    setIsDropdownOpen((prev)=>({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (

      <div className={cn("h-screen fixed top-0 left-0 md2:w-[15%] md:w-[20%] dark:bg-bg5/15 bg-white shadow-lg border-r px-4 md:flex hidden flex-col", className)}>
        {/* Sidebar Header */}
        <div className="flex gap-2 pl-6 items-center py-7">
           <img src="/profile-pic.svg" alt="profile-pic.svg" />
           <h3 className="text-t14 font-medium">ByeWind</h3>
        </div>

        {/* Sidebar Content */}
        <div className="overflow-y-auto pl-6">
          {/* Section 1: Favorites */}
          <div className="pb-5">
            <div className="flex gap-4 items-center">
              <button className="text-t14 font-medium text-black/40">Favorites</button>
              <button className="text-t14 font-medium text-black/20">Recently</button>
            </div>
            <ul className="list-disc ml-5">
              <li className="py-[10px] text-t14 font-medium">
                <NavLink to="/overview">
                  Overview
                </NavLink>
              </li>

              <li className="py-[10px] text-t14 font-medium">
                <NavLink to="/Projects">
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
          {/* dashboard */}
          <div className="">
            
            {leftSidebarData.map((section, sectionId)=>(
              <div key={sectionId}>
                <div>
                  <p className="text-t14 font-medium text-black/20">{section.title}</p>
                  <div>
                    {section.item.map((itemLink, index)=>(
                      <div key={index} className="py-3">
                        <div onClick={() => toggleDropdown(itemLink.id)} className="flex items-center gap-1 cursor-pointer hover:bg-bg1 ">
                          {itemLink.subItem && (
                            <p className={`h-5 w-5  transform transition ${
                              isDropdownOpen[itemLink.id] ? "rotate-90" : ""
                            }`}><IoIosArrowForward /></p>
                          )}
                          <p>{itemLink.logo}</p>
                          <p className="text-nowrap">{itemLink.itemTitle}</p>
                        </div>
                        {isDropdownOpen[itemLink.id] && itemLink.subItem && (
                          <div>
                            <LinkOfItem item={itemLink.subItem}/>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            ))}
           
          </div>
        </div>
        <div className=" bg-white mt-auto flex justify-center py-6">
          <NavLink to="/">
            <img src="/SnowUI-Logo.svg" alt="SnowUI-Logo.svg" />
          </NavLink>
        </div>
      </div>
    
  )
}


