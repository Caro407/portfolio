import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b py-1 w-full">
      <Link to="/" className="font-bold text-xl mx-2">Portfolio de moi</Link>
      <Link to="/about" className="mx-2">About me</Link>
      <Link to="/projects" className="mx-2">My projects</Link>
    </nav>
  )
};

export default Navbar;
