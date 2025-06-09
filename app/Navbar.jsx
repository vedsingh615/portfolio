'use client'; // Add this if you're using the /app directory (Next.js 13+)

import React, { useState } from 'react';
import Link from 'next/link';
import './globals.css';
import { AlignCenter } from '@deemlol/next-icons';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const buttomenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <p className="name">Portfolio</p>
        <nav className={showMenu ? 'menu-mobile' : 'menu-web'}>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          
        </nav>

        <div className="humbur">
          <button className='btn' onClick={buttomenu}>
           <AlignCenter size={38} color="white"  />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
