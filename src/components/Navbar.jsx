import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.svg";
import { navItems } from "../constants";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-black/30 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight" style={{ cursor: 'pointer' }}>Mozilla Firefox Club</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li id="navlink" key={index}>
                <Link 
                  to={item.href} 
                  smooth={true} 
                  duration={800}
                  offset={item.offset}>
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-5 items-center">
            <Link 
              to="upcoming-events"
              smooth={true} 
              duration={500}
              offset={-110}
              id="navbutton"
              className="py-2 px-3 border rounded-md">
                View Schedule
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfPDU7xdWwZ4FowMcWQEWELt7TUkQmfCIS2koFG30AJS_RHNw/viewform?usp=header"
              id="navbutton"
              className="bg-gradient-to-r from-blue-500 to-indigo-700 py-2 px-3 rounded-md"
            >
              Register Now
            </a>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-black border-b-1 border-neutral-700/80 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link 
              to="upcoming-events"
              smooth={true} 
              duration={500}
              offset={-110}
              className="py-2 px-3 border rounded-md">
                View Schedule
            </Link>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfPDU7xdWwZ4FowMcWQEWELt7TUkQmfCIS2koFG30AJS_RHNw/viewform?usp=header"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-blue-500 to-blue-700"
              >
                Register Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
