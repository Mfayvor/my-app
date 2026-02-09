import { useState, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navLinks = `hover:border-b-2 px-1 py-0 text-xs font-semibold ${isHomePage ? "border-white text-white" : "border-gray-800 text-gray-800"}`;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-14 transition-all duration-300 ${scrolled ? "bg-yellow-600" : "bg-transparent"} flex justify-between items-center p-4 z-50 text-white`}
      >
        <h1 className="p-2 flex items-center">
          <Link to="/">
            <FaCoffee className=" text-red-900 inline-block lg:mr-1.5 sm:mr-2.5 mb-1 lg:text-3xl sm:text-xl" />
            <span className="text-red-900 lg:text-2xl sm:text-xl font-bold">
              Kao
            </span>
            <span
              className={`font-bold ${isHomePage ? "text-white" : "text-black"}`}
            >
              Dev
            </span>
          </Link>
        </h1>
        <ul className="flex lg:gap-4 sm:gap-2 items-center">
          <li className={navLinks}>
            <Link to="/">Home</Link>
          </li>
          <li className={navLinks}>
            <Link to="/page/About">About</Link>
          </li>
          <li className={navLinks}>
            <Link to="/Project">Project</Link>
          </li>
          <li className={navLinks}>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
