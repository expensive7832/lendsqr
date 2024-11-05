import React, { FC, useState } from 'react';
import './../../styles/topbar.scss';
import { FaBars, FaBell, FaSearch, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topbar = ({sidebaropen, setsidebaropen}:{sidebaropen: Boolean, setsidebaropen: React.Dispatch<React.SetStateAction<Boolean>>}) => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    // onSelect(item);
    setIsOpen(false); // Close dropdown after selection
  };

    return(
  <header>
    <article className="logo">
        <Link to={"/"}>
        <img src="/Group.svg" alt="logo" />
        </Link>
    </article>

    <div className="search-bar-sm">
    <input type="text" placeholder="Search for anything" />
    <button>
        <FaSearch color='#fff'/>
    </button>
    </div>

    <article className="topbar">
    <div className="search-bar">
    <input type="text" placeholder="Search for anything" />
    <button>
        <FaSearch color='#fff'/>
    </button>
    </div>

    <div className="user-info">
      {
        sidebaropen ?

        <button onClick={() => setsidebaropen((prev) => !prev )} className='sidebar-sm-ctrl'>
        <FaTimes/>
      </button>
        :

        <button onClick={() => setsidebaropen((prev) => !prev )} className='sidebar-sm-ctrl'>
        <FaBars/>
      </button>
        
      }
      <a href=''>Docs</a>
      <div className="notification">
        <FaBell/>
    </div>
      
       <div className="dropdown">
      <div className="dropdown-toggle" onClick={handleToggle}>
      <img src="/image 4.png" alt="User Avatar" className="user-avatar" />
       <small> Adedeji</small>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {["Profile", "Settings", "Logout"].map((item, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
    </article>
   
  </header>
)};

export default Topbar;
