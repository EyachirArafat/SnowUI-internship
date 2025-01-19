import React, { useState } from "react";
import { Container } from "../common/Container";
import { TopBar } from "./TopBar";
import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";

export const MyBar = ({mainData}) => {
  const [isLeftSidebar, setIsLeftSidebar] = useState(false);
  const [isRightSidebar, setIsRightSidebar] = useState(false);

  const toggleLeftSidebar = () => {
    setIsLeftSidebar(!isLeftSidebar);
  };
  const toggleRightSidebar = () => {
    setIsRightSidebar(!isRightSidebar);
  };

  return (
    <div className="flex h-screen">

      {!isLeftSidebar && <LeftSideBar />}


      
      <div className="md2:w-[65%] w-full md2:ml-[15%]">
        <TopBar 
        toggleLeftSidebar={toggleLeftSidebar} 
        toggleRightSidebar={toggleRightSidebar}
        
        // TBclass={`${!isLeftSidebar ? "w-[65%]" : "w-[80%] left-[0%]"}
        //   ${!isRightSidebar ? "w-[65%]" : "w-[85%]"}`}
        />

        <div className="sm:pt-20 pt-28 py-6 space-y-4">
          <div className="bg-white p-4 rounded ">
            {mainData}
          </div>
        </div>

      </div>


      {!isRightSidebar && <RightSideBar />}
    </div>
  );
};
