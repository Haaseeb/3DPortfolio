import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

interface NavigationProps {
  profileImage: string;
  name: string;
}

export function Navigation({ profileImage, name }: NavigationProps) {
  const scrollPosition = useScrollPosition();
  const isVisible = scrollPosition > 100;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 bg-opacity-70 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img
                src="https://ibb.co/9NNdTrk"
                alt="Haseeb ur Rehman"
                className="w-8 h-8 rounded-full object-cover border-2 border-white"
              />
              <span className="text-white font-semibold">{name}</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-300 hover:text-white transition-colors duration-200"
    >
      {children}
    </a>
  );
}
