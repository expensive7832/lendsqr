import React, { useEffect, useState } from 'react';
import './../../styles/sidebar.scss';

const Sidebar = ({sidebaropen, setsidebaropen}:{sidebaropen: Boolean, setsidebaropen: React.Dispatch<React.SetStateAction<Boolean>>}) =>{


  type sidebarLinkProps = {
    img: string,
    label: string,
    category: string
  }

  const sideBarLinks: sidebarLinkProps[] = [
    {category: "customer", img: "/user-friends 1.png", label: "User"},
    {category: "customer", img: "/users 1.png", label: "Guarantors"},
    {category: "customer", img: "/sack 1.png", label: "Loans"},
    {category: "customer", img: "/handshake-regular 1.png", label: "Decision Model"},
    {category: "customer", img: "/piggy-bank 1.png", label: "Savings"},
    {category: "customer", img: "/Group 104.png", label: "Loan Request"},
    {category: "customer", img: "/user-check 1.png", label: "Whitelist"},
    {category: "customer", img: "/user-times 1.png", label: "karma"},

    {category: "business", img: "/briefcase 1.png", label: "Organization"},
    {category: "business", img: "/Group 104.png", label: "Loan Products"},
    {category: "business", img: "/np.png", label: "Saving Product"},
    {category: "business", img: "/coins-solid 1.png", label: "Fees and charges"},
    {category: "business", img: "/icon.png", label: "Transaction"},
    {category: "business", img: "/galaxy 1.png", label: "Charges"},
    {category: "business", img: "/user-cog 1.png", label: "Service Account"},
    {category: "business", img: "/scroll 1.png", label: "Settlements"},
    {category: "business", img: "/chart-bar 2.png", label: "Reports"},

    {category: "settings", img: "/preference.png", label: "Preferences"},
    {category: "settings", img: "/fees.png", label: "Fee and Pricing"},
    {category: "settings", img: "/audit.png", label: "Audit Logs"},

  ] 

  return(
    <aside className={`sidebar ${sidebaropen && "open"}`}>
    <nav className="sidebar-menu">
      <ul>

        
        
        <div className='top-text'>
          <img src="/briefcase 1.png" alt="briefcase" />
          <p>Switch Organization</p>
        </div>

      
        <li>
          <img src="/home 1.png" alt="home" />
          Dashboard
        </li>

        <p>CUSTOMERS</p>

        {
          sideBarLinks?.map((link, i) =>(
           
            link?.category == "customer" &&

            <li key={i}>
            <img src={link.img} alt={link.label} />
             {link.label}
          </li>

          ))
        }

      <p>BUSINESSES</p>

        {
          sideBarLinks?.map((link, i) =>(
           
            link?.category == "business" &&

            <li key={i}>
            <img src={link.img} alt={link.label} />
            {link.label}
          </li>

          ))
        }

      <p>SETTINGS</p>


      {
          sideBarLinks?.map((link, i) =>(
           
            link?.category == "settings" &&

            <li key={i}>
            <img src={link.img} alt={link.label} />
            { link.label}
          </li>

          ))
        }
        
      </ul>
    </nav>
  </aside>
  )
}

export default Sidebar;
