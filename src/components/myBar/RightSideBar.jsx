import React, { useState } from "react";
import { rightSidebarData } from "../../utils/data/apiData";
import { cn } from "../../utils/lib/cn";

export const RightSideBar = ({className}) => {
  return (

      <div className={cn("h-screen fixed top-0 right-0 md2:w-[20%] bg-white shadow-lg border-l p-4 md2:flex hidden flex-col", className)}>

        {/* Sidebar Content */}
        <div className="overflow-y-auto pl-6">
          <div className="">
            <h1 className="text-t14 font-medium px-1 py-2">Notifications</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.notifications.map((notification)=>(
                <div key={notification.id} className="flex lg:flex-row flex-col gap-2 p-2 cursor-pointer group">
                  <p className="flex items-center justify-center p-1 h-6 bg-bg2 rounded-full ">{notification.logo}</p>
                  <div className="hover:scale-105">
                    <h3 className="text-t14 font-medium">{notification.message}</h3>
                    <p className="text-[12px] group-hover:text-[16px] transition-all duration-200 text-black/40">{notification.time}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-t14 font-medium px-1 py-2">Activities</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.activities.map((activity)=>(
                <div key={activity.id} className="flex lg:flex-row flex-col gap-2 p-2 cursor-pointer group">
                  <div className="flex items-center justify-center p-1 h-6 rounded-full ">
                    <img src={activity.img} alt={activity.message} />
                  </div>
                  <div className="hover:scale-105">
                    <h3 className="text-t14 font-medium">{activity.message}</h3>
                    <p className="text-[12px] group-hover:text-[16px] transition-all duration-200 text-black/40">{activity.time}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-t14 font-medium px-1 py-2">Contacts</h1>
            <div className="flex flex-col gap-1">
              {rightSidebarData.contacts.map((contact)=>(
                <div key={contact.id} className="flex gap-2  group cursor-pointer p-2">
                  <img src={contact.img} alt={contact.message} />
                  <h3 className="text-t14 group-hover:translate-x-2 transition-all duration-200 font-medium px-1 py-2">{contact.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}


