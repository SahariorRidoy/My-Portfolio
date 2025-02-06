import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 left-0 right-0 z-50 w-full bg-base-100 shadow-md">
      <div className="max-w-[1320px] mx-auto navbar">
        <div className="navbar-start">
    
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-md dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow z-[1000]">
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Skills</a></li>
              <li><a>Education</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">Saharior Ridoy</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-md menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Skills</a></li>
            <li><a>Education</a></li>
            <li><a>Projects</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-success text-white">Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
