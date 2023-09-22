import { useState } from "react";

const Menubar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-semibold text-xl">
            <img src="" alt="loading..."/>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              id="menu-toggle"
              className="text-white"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden ${
            mobileMenuOpen ? "" : "hidden"
          } bg-gray-800 p-4`}
        >
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Home
          </a>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            About
          </a>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            bal amr heda vore kabo heda vore hagbo
            
          </a>
          <a href="#" className="block text-white hover:text-gray-300 mb-2">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Menubar;
