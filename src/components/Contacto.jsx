import React from 'react'

const Contacto = () => {
  return (
    <div id='contacto' className='max-w-[1140px] m-auto w-full p-4 py-16'>
        <h2 className='text-center text-gray-700'>Envíanos un mensaje</h2>
        <p className='text-center text-gray-700 py-2'>Estamos esperando!</p>
        <div className='grid md:grid-cols-2'>
            <img 
                src="https://www.aventourpuertovaras.cl/wp-content/uploads/2023/03/foto4.jpg" 
                alt="/" 
                className='w-full md:full object-cover p-2 max-h-[500px] h-[200px]'
            />
            <form >
                <div className='grid grid-cols-2'>
                    <input className='border m-2 p-2' type="text" placeholder='Nombre'/>
                    <input className='border m-2 p-2' type="text" placeholder='Apellido'/>
                    <input className='border m-2 p-2' type="email" placeholder='Email'/>
                    <input className='border m-2 p-2' type="tel" placeholder='Teléfono'/>
                    <input className='border col-span-2 p-2 m-2' type="text" placeholder='Dirección'/>
                    <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                    <button className='col-span-2 m-2'>Enviar</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contacto