import React, {useState} from 'react';
/* import {BsChatSquareDots} from 'react-icons/bs'; */
import {
    FaFacebookF,
    FaInstagram,
    FaBars,
} from 'react-icons/fa';

const Navbar = () => {
const [nav, setNav] = useState(false);

const handleNav = () => {
    setNav(!nav);
};
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
        <ul className='hidden sm:flex px-4'>
            <li>
                <a href="/">Inicio</a>
            </li>
            <li>
                <a href="#tours">Tours</a>
            </li>
            <li>
                <a href="#rentacar">Rent a Car</a>
            </li>
            <li>
                <a href="#transfer">Transfer</a>
            </li>
            <li>
                <a href="#contacto">Contacto</a>
            </li>
        </ul>
        <div className='flex justify-between'>
            <a href="https://www.facebook.com/profile.php?id=100054312108825"><FaFacebookF className='mx-4 hover:fill-blue-600' /></a>
            {/*
            <FaTwitter className='mx-4' />
            <FaGooglePlusG className='mx-4' />
            */}
            <a href="https://www.instagram.com/puertovarasaventour/"><FaInstagram className='mx-4 hover:fill-pink-600' /></a>
        </div>
        {/* hamburger icon */}
        <div onClick={handleNav} className='sm:hidden z-10'>
            <FaBars size={20} className='mr-4 cursor-pointer' />
        </div>
        {/* Mobile Menu */}
        <div 
            onClick={handleNav}
            className={
                nav 
                    ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col' 
                    : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
            }
        >
            <ul className='h-full w-full text-center pt-12'>
                <li className='text-2xl py8'>
                    <a href="/">Inicio</a>
                </li>
                <li className='text-2xl py8'>
                    <a href="#tours">Tours</a>
                </li>
                <li className='text-2xl py8'>
                    <a href="#rentacar">Rent a Car</a>
                </li>
                <li className='text-2xl py8'>
                    <a href="#transfer">Transfer</a>
                </li>
                <li className='text-2xl py8'>
                    <a href="#contacto">Contacto</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Navbar