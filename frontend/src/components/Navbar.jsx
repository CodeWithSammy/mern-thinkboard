import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar bg-base-100 shadow-md border-b border-base-200">
      {/* Start - Logo */}
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold">
          Think Board
        </Link>
      </div>

      {/* Center - Desktop Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create Note</Link>
          </li>
        </ul>
      </div>

      {/* End - Theme Toggle + Mobile Menu */}
      <div className="navbar-end">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="btn btn-ghost btn-circle"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            // Sun Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71-.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.76 4.76l-.71.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
              />
            </svg>
          ) : (
            // Moon Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 0010.02 9.79z" 
              />
            </svg>
          )}
        </button>

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create">Create Note</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
