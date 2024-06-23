"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { navLinks } from "../../constants/nav";
import useScrollDirection from "@/hooks/useScrollDirection";
const Navbar = () => {
  const direction = useScrollDirection();
  const goToView = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const renderNavElements = (navObj: Record<string, string>) => {
    switch (navObj.id) {
      case "home":
        return (
          <div
            key={navObj.id}
            className="relative object-contain h-[13.72px] w-[34.2px] sm:h-[19px] sm:w-[49px] cursor-pointer hover:shadow-2xl shadow-black "
          >
            <Image
              onClick={() => goToView(navObj?.id)}
              key={navObj.id}
              src={"/assets/logo.svg"}
              alt="logo"
              fill={true}
              objectFit="object-contain"
            />
          </div>
        );

      default:
        return (
          <li
            onClick={() =>
              navObj.url ? window.open(navObj?.url) : goToView(navObj.id)
            }
            key={navObj.id}
            className=" text-primary-200 hover:text-white-500 cursor-pointer"
          >
            {navObj.label}
          </li>
        );
    }
  };
  return (
    <nav
      className={`navtab-wrapper fixed ${
        direction === "down" ? "-top-24" : "top-5 sm:top-8"
      } transition-all duration-500  left-[50%]  -translate-x-[50%] z-50 backdrop-blur-md px-[.75rem] sm:px-[1.75rem]`}
    >
      <ul className="list- flex justify-between items-center  py-2 gap-[.75rem] sm:gap-[1.75rem] sm:text-[1.25rem]">
        {navLinks?.map(
          (navObj) => renderNavElements(navObj)
          // navObj.id !== "home" ? (
          //   <li
          //     onClick={() => navObj.id && goToView(navObj.id)}
          //     key={navObj.id}
          //     className=" text-primary-200 hover:text-white-500 cursor-pointer"
          //   >
          //     {navObj.label}
          //   </li>
          // ) : (
          //   <div className="relative object-contain h-[13.72px] w-[34.2px] sm:h-[19px] sm:w-[49px] cursor-pointer hover:shadow-2xl shadow-black ">
          //     <Image
          //       onClick={() => navObj.id && goToView(navObj.id)}
          //       key={navObj.id}
          //       src={"/assets/logo.svg"}
          //       alt="logo"
          //       fill={true}
          //       objectFit="object-contain"
          //     />
          //   </div>
          // )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
