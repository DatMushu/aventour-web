import React from 'react'

const Servicios = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-shadow-custom'>Tours</h3>
        <img 
          className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
          src="https://blogskystorage.s3.amazonaws.com/2023/04/grande-de-chiloe.jpeg" 
          alt="/" 
        />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-shadow-custom'>Rent a Car</h3>
        <img 
          className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
          src="https://cdn.prod.website-files.com/657458492f80a56a060c1a11/65faade62780810d3ff797c0_getty-images-Kdd4tFoTpfQ-unsplash.jpg" 
          alt="/" 
        />
      </div>
      <div className='relative p-4 '>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-shadow-custom'>Transfer</h3>
        <img 
          className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
          src="https://cdn.motor1.com/images/mgl/P3WOnL/s1/img_8659.jpg" 
          alt="/" 
        />
      </div>
    </div>
  )
}

export default Servicios