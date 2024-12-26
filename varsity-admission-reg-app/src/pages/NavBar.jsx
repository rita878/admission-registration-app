import { GraduationCapIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-full font-[500] ${
      isActive ? "bg-[#6366F1] text-white" : "text-gray-400 hover:text-gray-600"
    }`;

  return (
     
    <nav className="container mx-auto px-4 py-6">
     
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ">
          <GraduationCapIcon className="h-14 w-14 text-[#6366F1]" />
        </div>

        {/* Mobile Navbar Toggle Button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/university-list" className={navLinkClass}>
            University List
          </NavLink>
          <NavLink to="/profile" className={navLinkClass}>
            Profile
          </NavLink>
          <NavLink to="/support" className={navLinkClass}>
            Our Team
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center space-y-4 md:hidden">
          <NavLink
            to="/"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/university-list"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            University List
          </NavLink>
          <NavLink
            to="/profile"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Profile
          </NavLink>
          <NavLink
            to="/support"
            className={navLinkClass}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Team
          </NavLink>
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Close
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
