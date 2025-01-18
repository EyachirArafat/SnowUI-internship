import React from "react";

export const LeftSideBar = () => {

  return (
    <div className="border-r px-2">
      <div className="h-screen">
        {/* Sidebar Header */}
        <div className="flex gap-2 items-center py-7">
           <img src="/profile-pic.svg" alt="profile-pic.svg" />
           <h3 className="text-t14 font-medium">ByeWind</h3>
        </div>

        {/* Sidebar Content */}
        <div className="">
          {/* Section 1: Favorites */}
          <div className="pb-5">
            <div className="flex gap-4 items-center">
              <button className="text-t14 font-medium text-black/40">Favorites</button>
              <button className="text-t14 font-medium text-black/20">Recently</button>
            </div>
            <ul className="list-disc ml-5">
              <li className="py-[10px] text-t14 font-medium">Overview</li>
              <li className="py-[10px] text-t14 font-medium">Projects</li>
            </ul>
          </div>
          {/* dashboard */}
          <div className="mb-5">
            <button className="text-t14 font-medium text-black/20">Dashboards</button>
            
          </div>
        </div>
      </div>
    </div>
  )
}


