import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div className="mx-auto container">
      <nav className="flex items-center justify-between mt-3  ">
        <div className="flex items-center gap-2">
          <Image
            src="/img/cocotiers.png"
            alt="logo"
            width={1000}
            height={1000}
            className="w-14"
          />
          <h1 className="text-3xl">
            Noucia
            <br />
            Adams{" "}
          </h1>
        </div>
        <ul className="flex flex-row space-x-12">
          <li className="relative group cursor-pointer">
            <span className="group-hover:after:bg-yellow-500 after:absolute after:h-2 after:w-full after:-bottom-2 after:left-0 after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100">
              HOME
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:after:bg-yellow-500 after:absolute after:h-2 after:w-full after:-bottom-2 after:left-0 after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100">
              ABOUT
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:after:bg-yellow-500 after:absolute after:h-2 after:w-full after:-bottom-2 after:left-0 after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100">
              NEWSLETTER
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:after:bg-yellow-500 after:absolute after:h-2 after:w-full after:-bottom-2 after:left-0 after:transition-transform after:duration-300 after:scale-x-0 group-hover:after:scale-x-100">
              BLOG
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
