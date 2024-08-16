import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://storage.googleapis.com/chile-travel-cdn/2021/07/puerto-varas_prin-min.jpg" alt="/" className='w-full h-full object-cover'/>
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Viajes por la Región</h1>
          <h2 className='text-4xl py-4 italic'>Con Aventour</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non quam eget ante pellentesque lobortis nec nec ex. Nulla ullamcorper eu nulla id maximus. Duis vitae ullamcorper tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tristique vel velit et mattis. Aliquam gravida et magna a auctor.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero