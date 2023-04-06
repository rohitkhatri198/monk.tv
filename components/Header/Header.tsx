import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const links = ["Home", "Tv shows", "New & Popular", "My List"];
  const [isScrolled, setIsScrolled]= useState(false);
  useEffect(() => {
    const handleScroll =()=>{
      if(window.scrollY >0){
          setIsScrolled(true);
      } else{
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])
  
  return (
    <div className={`header z-[100] ${isScrolled && "bg-[#000000d2]  transition-all duration-[.4s] ease"} `}>
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
        <div className="search hidden text-white hover:text-[#69ff69] sm:inline h-7 w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="hidden lg:inline">Kids</span>
        <div className="bell h-7 w-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Link href="/account">
          <img src="/images/her2.jpg" alt="her" width={50}
            height={50} className="cursor-pointer rounded object-contain"/>
        </Link>
      </div>
    </div>
  );
}

export default Header;
