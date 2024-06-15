import Image from "next/image";
import React from "react";
import { navLinks } from "../constants/nav";

const Navbar = () => {
  return (
    <nav className="navtab-wrapper fixed top-2 left-[50%]  -translate-x-[50%] z-10 backdrop-blur-md gap-4">
      <ul className="list- flex justify-between items-center px-5 py-2 gap-5">
        {navLinks?.map((navObj) => (
          <li className=" mx-[clamp(.7rem,3vw,1.5rem)] text-gray-200">
            {navObj.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
