import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { leftSidebarData, rightSidebarData } from "../../utils/data/apiData";
import LinkOfItem from "../common/LinkOfItem";
import { NavLink } from "react-router-dom";
import { cn } from "../../utils/lib/cn";

export const RightSideBar = ({className}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleDropdown = (id) => {
    setIsDropdownOpen((prev)=>({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (

      <div className={cn("h-screen fixed top-0 right-0 md2:w-[20%] bg-white shadow-lg border-l p-4 md2:flex hidden flex-col", className)}>
        
        {/* <div className="flex gap-2 pl-6 items-center py-7">
           <img src="/profile-pic.svg" alt="profile-pic.svg" />
           <h3 className="text-t14 font-medium">ByeWind</h3>
        </div> */}

        {/* Sidebar Content */}
        <div className="overflow-y-auto pl-6">
          <div className="">
            <h1 className="text-t14 font-medium px-1 py-2">Notifications</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.notifications.map((notification)=>(
                <div key={notification.id} className="flex lg:flex-row flex-col gap-2 p-2">
                  <p className="flex items-center justify-center p-1 h-6 bg-bg2 rounded-full ">{notification.logo}</p>
                  <div>
                    <h3 className="text-t14 font-medium">{notification.message}</h3>
                    <p className="text-[12px] text-black/40">{notification.time}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-t14 font-medium px-1 py-2">Activities</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.activities.map((activity)=>(
                <div key={activity.id} className="flex lg:flex-row flex-col gap-2 p-2">
                  <div className="flex items-center justify-center p-1 h-6 rounded-full ">
                    <img src={activity.img} alt={activity.message} />
                  </div>
                  <div>
                    <h3 className="text-t14 font-medium">{activity.message}</h3>
                    <p className="text-[12px] text-black/40">{activity.time}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-t14 font-medium px-1 py-2">Contacts</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.contacts.map((contact)=>(
                <div key={contact.id} className="flex gap-2 p-2">
                  <img src={contact.img} alt={contact.message} />
                  <h3 className="text-t14 font-medium px-1 py-2">{contact.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}


