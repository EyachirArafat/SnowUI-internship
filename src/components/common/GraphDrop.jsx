import React, { useState } from "react";
import { GoGraph } from "react-icons/go";

export const GraphDrop = () => {
  const [selected, setSelected] = useState(<GoGraph />);
  const [open, setOpen] = useState(false);

  const options = [
    { value: "up", label: "Up", icon: <GoGraph /> },
    { value: "down", label: "Down", icon: <GoGraph /> },
  ];

  const handleSelect = (option) => {
    setSelected(option.label);
    setOpen(false);
  };

  return (
    <div className="relative inline-block dark:bg-bg5/15 bg-black/5 rounded-xl p-1
     max-w-32 w-20">
      {/* Dropdown Trigger */}
      <div
        className="  rounded-md p-2 cursor-pointer flex items-center justify-between "
        onClick={() => setOpen(!open)}
      >
        <span className="dark:text-white text-black">{selected}</span>
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-bg5/15 shadow-lg rounded-md mt-1 z-10">
          {options.map((option, index) => (
            <div
              key={index}
              className="p-2 flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer dark:text-white text-black"
              onClick={() => handleSelect(option)}
            >
              {option.icon}
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
