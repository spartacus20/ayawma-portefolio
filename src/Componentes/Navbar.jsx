import React from 'react'

function Navbar() {
  return (
    <header className='bg-white fixed top-0 left-0 h-auto w-full   py-[25px] pr-[40px] pl-[50px] z-[200]  shadow-[0_0_10px_rgba(0,0,0,.09)] '>
        <nav className='bg-white flex items-center justify-between'>
            <h1 className='font-bold text-2xl'>AYAWMA</h1>
            <ul className='flex'>
                <li className='mx-5 text-xl font-semibold'><a href="/sobre" className='hover:text-[#0000EE]'>Sobre</a></li>
                <li className='mx-5 text-xl font-semibold'><a href="/projetos" className='hover:text-[#0000EE]'>Projetos</a></li>
                <li className='mx-5 text-xl font-semibold'><a href="/contacto" className='hover:text-[#0000EE]'>Contacto</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar