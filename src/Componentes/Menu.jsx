import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Menu({ sidebar, toggleSidebar }) {
    return (
        <div className>
            <div className={`h-[100vh]   bg-black absolute top-0 lef-0 right-0 opacity-50 w-full ${sidebar ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`} onClick={toggleSidebar}>
            </div>
            <div className={`h-[100vh] w-60 bg-black absolute top-0 lef-0 right-0 px-10 ${sidebar ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}>
                <div className='mt-11 w-full flex justify-end'>
                    <AiOutlineClose size={24} className='text-white' onClick={toggleSidebar}/>
                </div>
                <ul className='text-white text-right mt-20'>
                <li className='my-4' onClick={toggleSidebar}><Link to={"/"}>Home</Link></li>
                    <li className='my-4' onClick={toggleSidebar}><Link to={"/sobre"}>Sobre</Link></li>
                    <li className='my-4' onClick={toggleSidebar}><Link to={"/projetos"}>Projetos</Link></li>
                    <li className='my-4' onClick={toggleSidebar}><Link to={"/contacto"}>Contacto</Link></li>
                </ul>
            </div>

        </div>

    )
}

export default Menu