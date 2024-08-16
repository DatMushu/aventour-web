import React from 'react'
import {AiFillPhone, AiOutlineClockCircle} from 'react-icons/ai'
import logo from '../Resources/logo.svg'

const TopBar = () => {
  return (
    <div className='flex justify-between items-center px-4 py2'>
        <div className='flex items-center'>
            <img className='text-[var(--primary-dark)] mr-2 h-6' src={logo} alt="/" />
            <h1 className='text-xl font-bold text-gray-700'>AVENTOUR</h1>
        </div>
        <div className='flex'>
            <div className='hidden md:flex items-center px-6'>
                <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>9AM -5AM</p>
            </div>
            <div className='hidden md:flex items-center px-6'>
                <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]'/>
                <p className='text-sm text-gray-700'>+569 4524 8903</p>
            </div>
            <a href="#cotizar"><button>Cotiza con nosotros</button></a>
        </div>
    </div>
  )
}

export default TopBar