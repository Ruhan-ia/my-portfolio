import React from "react";
import { Link } from "react-router-dom";
import resume from '../../../public/resume/Istiak Ahamad Resume1.pdf'

const Navbar = () => {

  

    const navbarItems = (
        <>
         <li>
               <Link to='/'>Home</Link>
              </li>
              <li>
               <Link to='/projects'>Projects</Link>
               
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
        </>
    )
  return (
    <div>
      <div className="navbar  bg-gray-400">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {navbarItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navbarItems}
          </ul>
        </div>
        <div className="navbar-end">
          <button  className="btn"><a href={resume} download='resume'>Download Resume</a></button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
