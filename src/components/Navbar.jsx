import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/logofit.jpeg'; // Import the logo image as a default export

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <div className='flex items-center flex-grow'> {/* Use flex-grow to center the Logo */}
        <p className='text-gray-400 mr-3'>Lucknow</p> {/* Add the h5 text "Lucknow" before the Logo */}
        <img src={Logo} alt="Logo" className=" ml-14 w-12 h-12 " /> {/* Center the logo in the top navbar */}
      </div>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Login</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
       <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'} style={{ zIndex: 999 }}>
       <img src={Logo} alt="Logo" className="w-12 h-12 mt-5 ml-3 mb-1" />
           <li className='p-4 border-b border-gray-600'>Home</li>
           <li className='p-4 border-b border-gray-600'>Login</li>
           <li className='p-4 border-b border-gray-600'>Services</li>
           <li className='p-4 border-b border-gray-600'>About</li>
           <li className='p-4'>Contact</li>
       </ul>
     </div>
  );
};

export default Navbar;
