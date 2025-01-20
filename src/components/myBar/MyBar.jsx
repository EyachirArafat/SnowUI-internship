import React, { useState } from "react";
import { Container } from "../common/Container";
import { TopBar } from "./TopBar";
import { LeftSideBar } from "./LeftSideBar";
import { RightSideBar } from "./RightSideBar";
import { Outlet } from "react-router-dom";
import { BodyData } from "../home/BodyData";

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
    <div className="flex">

      {!isLeftSidebar && <LeftSideBar />}


      
      <div className={`md2:w-[65%] md2:ml-[15%] ${!isLeftSidebar ? "md:w-[75%] w-full md:ml-[25%]" : "mx-auto"}`}>
        <TopBar 
        toggleLeftSidebar={toggleLeftSidebar} 
        toggleRightSidebar={toggleRightSidebar}
        BCPath1="Dashboards"
        BCPath2="Default"
        
        TBclass={`md2:w-[65%] md2:left-[15%] left-[0%] ${!isLeftSidebar ? "md:w-[75%]  md:left-[25%]" : "md:w-full md:left-[0%] md:ml-[0%] "}`}
        />

        <div className="sm:pt-20 pt-28 py-6 space-y-4 dark:text-white">
          <div className="p-4 rounded ">
            {/* {mainData} */}
            <Outlet/>
            {/* <BodyData/> */}
          </div>
        </div>

      </div>


      {!isRightSidebar && <RightSideBar />}
    </div>
  );
};
