import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkOfItem = ({ item }) => {
  return (
    <div>
      {item.map((sbItem, index) => (
        <NavLink
          key={index}
          className={({ isActive }) =>
            `block text-nowrap p-2 pl-12 hover:bg-bg1 rounded-md ${
              isActive ? "bg-slate-200" : ""
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
