import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border-b">
      <Link path="/presentation" className="mx-2">About me</Link>
      <Link path="/projects" className="mx-2">My projects</Link>
    </nav>
  )
};

export default Navbar;
