"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [isopen, setIsopen] = React.useState(false); // start closed

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-md backdrop-blur-sm">
      <nav className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="" className="w-10 h-10 "/>
          <h1 className="text-xl font-bold text-black">TechXima</h1>
        </div>

        {/* Links */}
        <div className="flex gap-8 items-center">
          <ul className="hidden sm:flex gap-8 font-medium text-black">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">About</Link>
            </li>
            <li>
              <Link href="/contact">Servises</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

        
         

          {/* Mobile Menu Icon */}
          <button
            className="sm:hidden p-2 bg-black"
            onClick={() => setIsopen(true)} // open sidebar
          >
            <img src="/menu.svg" alt="menu" className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar */}
        {isopen && (
  <>
    {/* Overlay */}
  <div
  className="fixed inset-0 bg-transparent z-40"
  onClick={() => setIsopen(false)}
/>

    {/* Sidebar */}
    <div className="fixed top-[72px] right-0 h-[calc(100vh-72px)] w-64 bg-white shadow-lg z-50 p-6 sm:hidden transition-transform duration-300">
      <button
        className="absolute top-4 right-4 text-gray-600"
        onClick={() => setIsopen(false)}
      >
        ✕
      </button>
      <ul className="flex flex-col gap-6 font-medium mt-8">
        <li>
          <Link href="/" onClick={() => setIsopen(false)}>Home</Link>
        </li>
        <li>
          <Link href="/about" onClick={() => setIsopen(false)}>About</Link>
        </li>
        <li>
          <Link href="/servises" onClick={() => setIsopen(false)}>Services</Link>
        </li>
        <li>
          <Link href="/contact" onClick={() => setIsopen(false)}>Contact</Link>
        </li>
      </ul>
    </div>
  </>
)}
      </nav>
    </header>
  );
};

export default Navbar;
