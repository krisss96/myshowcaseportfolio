"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
        {/* w-full - makes the element span the full viewport width */}
        <div className="max-w-7xl mx-auto px-6 py-4">
            {/* max-w-7xl - limits the maximum width of the container */}
            {/* mx-auto - centers the container horizontally */}
            {/* px-6 - horizontal padding */}
            {/* py-4 - vertical padding */}
        <div className="flex items-center">
          <div className="flex-shrink-0">
              {/* flex-shrink-0 - prevents the logo from shrinking when the navbar is resized */}
            <Image
              src="/static/logo.svg"
              alt="Logo"
              width={110}
              height={110}
              className="w-16 h-16"
              priority
            />
          </div>
            {/* w-16 h-16 - sets width and height to 4rem (64px) */}
            {/* priority - ensures the img is prioritized */}

          <ul className="flex items-center ml-auto navbar-links" style={{ gap: '1rem', columnGap: '1rem' }}>
              {/* ml-auto - pushes the links to the right */}
              {/* navbar-links - custom class for additional styling if needed */}
            <li className="inline-block">
              <a href="#projects" className="px-3 py-1 text-black">PROJECTS</a>
            </li>
            <li className="inline-block">
              <a href="#about" className="px-3 py-1 text-black">ABOUT</a>
            </li>
            <li className="inline-block">
              <a href="#contacts" className="px-3 py-1 text-black">CONTACTS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
