import React, { useState } from "react";
import { Container } from "../common/Container";
import { TopBar } from "./TopBar";
import { LeftSideBar } from "./LeftSideBar";

export const MyBar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div>
      <Container>
        <div className="grid grid-flow-col lg:grid-cols-12 h-screen transition-all duration-500">
          {/* Left Sidebar */}
          {!isSidebarCollapsed && (
            <div className="lg:col-span-2 transition-all duration-300">
              <div className="h-full">
                <LeftSideBar />
              </div>
            </div>
          )}

          {/* Main Content */}
          <div
            className={`transition-all duration-300 ${
              isSidebarCollapsed ? "lg:col-span-12" : "lg:col-span-10"
            }`}
          >
            <div>
              <TopBar toggleLeftSidebar={toggleSidebar} />
              <div className="p-4">Main Content Area</div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-2">
            <div className="h-full">Right Sidebar Content</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
