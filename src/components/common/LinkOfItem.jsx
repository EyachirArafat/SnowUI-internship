import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkOfItem = ({ item }) => {
  return (
    <div>
      {item.map((sbItem, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            `block text-nowrap hover:translate-x-2 transition-all duration-200 p-2 pl-12 mb-1 hover:bg-bg1 hover:dark:bg-bg5/15 rounded-md ${
              isActive ? "bg-slate-200 dark:bg-bg5/15 dark:text-white" : ""
            }`
          }
          to={`/${sbItem
            ?.toLowerCase()
            .replace(/[^a-z0-9\s]/g, "")
            .replace(/\s+/g, "-")}`}
        >
          <h3>{sbItem}</h3>
        </NavLink>
      ))}
    </div>
  );
};

export default LinkOfItem;
