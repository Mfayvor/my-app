import { useState, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  const navLinks = " hover:border-b-2 border-white px-1 py-0 text-xs";
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
        className={`fixed top-0 w-full transition-all duration-300 ${scrolled ? "bg-amber-500" : "bg-transparent"} flex justify-between items-center p-4 z-50 text-white`}
      >
        <h1 className="p-2 flex items-center">
          <Link to="/">
            <FaCoffee className=" text-red-900 inline-block mr-1.5 mb-1 text-3xl" />
            <span className="text-red-900 text-2xl">Kao</span>Dev
          </Link>
        </h1>
        <ul className="flex gap-4 items-center">
          <li className={navLinks}>
            <Link to="/">Home</Link>
          </li>
          <li className={navLinks}>
            <Link to="/Skills">Skills</Link>
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
