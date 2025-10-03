import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">TechXima</h2>
          <p className="mt-4 text-sm leading-6">
            We build modern web applications, powerful digital experiences,
            and scalable solutions for startups and enterprises.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
             <li>
                <Link href="/" className="hover:text-white">Home</Link>
            </li>
             <li>
                <Link href="/servises" className="hover:text-white">Services</Link>
            </li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white">Our Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>Mobile Apps</li>
            <li>Digital Security</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: TechXima@gmail.com</li>
            <li>Phone: +234 803 388 5711</li>
            <li>Lagos, Nigeria</li>
          </ul>
          {/* <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white">🌐</a>
            <a href="#" className="hover:text-white">🐦</a>
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">💼</a>
          </div> */}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TechXima. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
