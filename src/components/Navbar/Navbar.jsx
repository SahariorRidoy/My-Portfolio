import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" max-w-[1320px] mx-auto navbar bg-base-100 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-md dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Education</a></li>
        <li><a>Projects</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Md. Saharior Ridoy</a>
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
    <a className="btn btn-success text-gray-800">Resume</a>
  </div>
</div>
  );
};

export default Navbar;