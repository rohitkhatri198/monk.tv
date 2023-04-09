import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

function Header() {
  const links = ["Home", "Tv shows", "New & Popular", "My List"];
  const [isScrolled, setIsScrolled] = useState(false);
  const{logout}=useAuth()
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header z-[100] ${
        isScrolled &&
        "bg-[#000000d2] sm:bg-[#000000d2]  transition-all duration-[.4s] ease"
      } `}
    >
      <div className="flex items-center space-x-2 md:space-x-10 ">
        <div className="text-white ">
          <img
            src="/images/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer object-contain"
          />
        </div>
        <div className="hidden space-x-4 md:flex ">
          {links.map((elm, i) => (
            <div className="links" key={i}>
              {elm}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4 text-sm ">
        <MagnifyingGlassIcon className="search hidden text-white hover:text-[#52f152] sm:inline h-7 w-7" />
        <span className="hidden lg:inline  text-white hover:text-[#52f152]">
          Kids
        </span>
        <BellIcon className="bell h-7 w-7  text-white hover:text-[#52f152]" />
        <Link href={"/login"}>
          <img
            onClick={logout}
            src="/images/her2.jpg"
            alt="her"
            width={50}
            height={50}
            className="cursor-pointer rounded object-contain"
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
