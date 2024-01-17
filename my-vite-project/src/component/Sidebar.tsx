import React from 'react';
import { FaStar, FaCheck, FaBars, FaTrash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    {
      path: "/important",
      name: "Important",
      icon: <FaStar />
    },
    {
      path: "/tasks",
      name: "Tasks",
      icon: <FaCheck />
    },
    {
      path: "/completed",
      name: "Completed",
      icon: <FaTrash/>
    }
  ];

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className='container'>
      <div className='sidebar'>
        <div className='top-section'>
        <img className='bars' src="Icon.png" alt="" />
          <div>
          <h1 className='logo'>TO-DO</h1>
           
          </div>
        </div>
        {
          menuItems.map((item, index) => (
            <div
              key={index}
              className="link"
              onClick={() => handleItemClick(item.path)}
            >
              <div className='icon'>{item.icon}</div>
              <div className='link-text'>{item.name}</div>
            </div>
          ))
        }
      </div>
      <main>{children}</main>
    </div>
  );
}
