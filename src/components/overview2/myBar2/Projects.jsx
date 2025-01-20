import React from "react";
import { BiRectangle } from "react-icons/bi";
import { DotHorizontal } from "../../common/DotHorizontal";

const ProjectTable = () => {
  const projects = [
    { manager: "ByeWind", date: "Jun 24, 2024", amount: "$942.00", status: "In Progress", statusColor: "bg-purple-200 text-purple-400 dark:bg-purple-600 dark:text-purple-200" },
    { manager: "Natali Craig", date: "Mar 10, 2024", amount: "$881.00", status: "Complete", statusColor: "bg-green-200 text-green-400 dark:bg-green-600 dark:text-green-200" },
    { manager: "Drew Cano", date: "Nov 10, 2024", amount: "$409.00", status: "Pending", statusColor: "bg-blue-200 text-blue-400 dark:bg-blue-600 dark:text-blue-200" },
    { manager: "Orlando Diggs", date: "Dec 20, 2024", amount: "$953.00", status: "Approved", statusColor: "bg-yellow-200 text-yellow-400 dark:bg-yellow-600 dark:text-yellow-200" },
    { manager: "Andi Lane", date: "Jul 25, 2024", amount: "$907.00", status: "Rejected", statusColor: "bg-gray-200 text-gray-400 dark:bg-gray-600 dark:text-gray-200" },
  ];

  return (
    <div className="p-4 rounded-xl shadow-sm bg-white dark:bg-bg5/5">
      <div className="flex justify-between items-center flex-wrap">
      <h2 className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-4">Projects</h2>
      <DotHorizontal className="h-5 p-1"/>
      </div>
      <div className="overflow-x-auto text-nowrap">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-300">
          <thead className="text-xs text-gray-400 dark:text-gray-500">
            <tr>
              <th scope="col" className="px-4 py-3">Manager</th>
              <th scope="col" className="px-4 py-3">Date</th>
              <th scope="col" className="px-4 py-3">Amount</th>
              <th scope="col" className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr
                key={index}
                className={` ${
                  index % 2 === 0 ? "bg-bg5/10 " : "bg-bg5/5"
                }`}
              >
                <td className="px-4 py-3 flex items-center gap-2">
                  <p>
                    <BiRectangle />
                  </p>
                  <p>{project.manager}</p>
                </td>
                <td className="px-4 py-3">{project.date}</td>
                <td className="px-4 py-3">{project.amount}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;
