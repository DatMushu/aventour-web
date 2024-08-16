import React from 'react'
import logo from '../Resources/logo.svg'

const Footer = () => {
  return (
    <div className='max-w-[1140px] w-full py-8 m-auto border-t-4'>
        <div className='flex items-center m-auto justify-center'>
            <img className='text-[var(--primary-dark)] mr-2 h-20' src={logo} alt="/" />
            <h1 className='text-xl font-bold text-gray-700'>AVENTOUR</h1>
        </div>
    </div>
  )
}

export default Footer