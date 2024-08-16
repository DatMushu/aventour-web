import React from 'react'

const Cotizar = () => {
  return (
    <div id='cotizar' className='max-w-[1140px] m-auto w-full p-4'>
        <form className='lg:flex lg:justify-between w-full items-center z-10'>
            <div className='flex flex-col my-2 py-2'>
                <label>Destino</label>
                <select className='lg:w-[300px] md:w-full border rounder-md p-2 z-10'>
                    <option>Isla de Chiloé</option>
                    <option>Ancud /Pingüineras</option>
                    <option>Chiloé Interior</option>
                    <option>Patagonia Verde</option>
                    <option>Saltos del Petrohué</option>
                    <option>Llanquihue - Frutillar - Cervecera Tropera</option>
                    <option>Carretera Austral</option>
                    <option>Parque Alerce Andino</option>
                    <option>Vuelta al Lago Llanquihue</option>
                    <option>Termas del Sol - Cochamó</option>
                    <option>Volcán Osorno - Petrohué</option>
                </select>
            </div>
            <div className='flex w-full'>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2 z-10'>
                <label>Check-in</label>
                <input className='border rounded-md p-2' type="datetime-local" />
              </div>
              <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label>Check-Out</label>
                <input className='border rounded-md p-2' type="datetime-local" />
              </div>
            </div>
            <div className='flex flex-col my-2 p-2 w-full'>
              <label>Buscar</label>
              <button className='w-full z-10'>Cotizar</button>
            </div>
        </form>
    </div>
  )
}

export default Cotizar