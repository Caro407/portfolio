import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b py-3 pr-2 w-full">
      <div className="flex justify-between">
        <Link to="/" className="font-bold text-xl mx-2">Caroline Lefevre</Link>
        <div>
          <a href="https://www.linkedin.com/in/caroline-lefevre-a2512794/" className="mx-1 hover:underline">LinkedIn</a>
          <a href="https://github.com/Caro407" className="mx-1 hover:underline">GitHub</a>
        </div>
      </div>
    </nav>
  )
};

export default Navbar;
