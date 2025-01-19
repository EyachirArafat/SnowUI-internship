import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const LinkOfItem = ({item, id}) => {
  const [isActive, setIsActive] = useState(null)
  const handleClick = (index)=>{
    setIsActive(index);
  };

  return (
    <div>
      {item.map((sbItem)=>(
        <NavLink 
        className={`block text-nowrap p-2 pl-12 hover:bg-bg1 rounded-md ${isActive === id ? " bg-bg1" : ""}`} onClick={()=> handleClick(id)}
        to={`/${sbItem
          ?.toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")}`}
        >
          <h3>{sbItem}</h3>
        </NavLink>
      ))}
    </div>
  )
}

export default LinkOfItem
