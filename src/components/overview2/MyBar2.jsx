// import React, { useState } from "react";
// import { TopBar } from "../myBar/TopBar";
// import { Outlet } from "react-router-dom";
// import { RightSideBar } from "../myBar/RightSideBar";
// import { LeftSideBar2 } from "./myBar2/LeftSideBar2";


// export const MyBar2 = () => {
//   const [isLeftSidebar, setIsLeftSidebar] = useState(false);
//   const [isRightSidebar, setIsRightSidebar] = useState(false);

//   const toggleLeftSidebar = () => {
//     setIsLeftSidebar(!isLeftSidebar);
//   };
//   const toggleRightSidebar = () => {
//     setIsRightSidebar(!isRightSidebar);
//   };

//   return (
//     <div className="flex">
//       {!isLeftSidebar && <LeftSideBar2 />}

//       <div className={`md2:w-[65%] md2:ml-[15%] ${!isLeftSidebar ? "md:w-[75%] w-full md:ml-[25%]" : "mx-auto"}`}>
//         <TopBar 
//         toggleLeftSidebar={toggleLeftSidebar} 
//         toggleRightSidebar={toggleRightSidebar}
//         BCPath1="Dashboards"
//         BCPath2="Overview"
//         RCollapseClass="hidden"
        
//         TBclass={`md2:w-[65%] md2:left-[15%] left-[0%] ${!isLeftSidebar ? "md:w-[75%]  md:left-[25%]" : "md:w-full md:left-[0%] md:ml-[0%] "}`}
//         />

//         <div className="sm:pt-20 pt-28 py-6 space-y-4 dark:text-white">
//           <div className="p-4 rounded ">
//             <Outlet/>
//           </div>
//           <div className="flex mt-auto">
//             footer
//           </div>
//         </div>

//       </div>
//       {/* {!isRightSidebar && <RightSideBar />} */}
//     </div>
//   );
// };


import React, { useState } from "react";
import { TopBar } from "../myBar/TopBar";
import { Outlet } from "react-router-dom";
import { LeftSideBar2 } from "./myBar2/LeftSideBar2";

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

        {/* Fixed Footer */}
        {/* <div className="bg-gray-100 dark:bg-gray-800 text-center p-4 fixed bottom-0 left-0 w-full">
          footer
        </div> */}

        <div className={`bg-gray-100 dark:bg-gray-800 text-center p-4 fixed bottom-0 left-0 md2:w-[65%] md2:ml-[15%] ${!isLeftSidebar ? "md:w-[75%] w-full md:ml-[25%]" : "mx-auto"}`}>
                {/* <TopBar 
                
                
                TBclass={`md2:w-[65%] md2:left-[15%] left-[0%] ${!isLeftSidebar ? "md:w-[75%]  md:left-[25%]" : "md:w-full md:left-[0%] md:ml-[0%] "}`}
                /> */}

        
               
        
              </div>
      </div>
    </div>
  );
};
