import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-center bg-gray-800 text-white p-4'>
        <ul className='flex align-center space-x-4 '>
          <li className='hover:text-blue-500'><Link to="/">Home</Link></li>
          <li className='hover:text-blue-500'><Link to="/events">Events</Link></li>
          <li className='hover:text-blue-500'><Link to="/ourteam">Our Team</Link></li>
          <li className='hover:text-blue-500'><Link to="/joinus">Join Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
