import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {GoThreeBars}  from 'react-icons/go'
import Menu from './Menu';

function Navbar() {

  const [sidebar, setSidebar] = useState(false); 
  const toggleSidebar = () =>  setSidebar(!sidebar);

  return (
    <header className='bg-white fixed top-0 left-0 h-auto w-full  py-[25px] pr-[40px] pl-[50px] z-[200]  shadow-[0_0_10px_rgba(0,0,0,.09)] '>
        <nav className='bg-white flex items-center justify-between'>
            <h1 className='font-bold text-2xl pointer'><Link to={"/"}>AYAWMA</Link></h1>
           <div className='xl:hidden sm:flex'>
            <GoThreeBars size={25} onClick={toggleSidebar}/>
            <Menu sidebar={sidebar} toggleSidebar={toggleSidebar}/> 

           </div> 
           
            <ul className='sm:hidden xl:flex'>
                <li className='mx-5 text-xl font-500 pointer hover:text-[#0000EE]'><Link to={"/sobre"}>Sobre</Link></li>
                <li className='mx-5 text-xl font-500 pointer hover:text-[#0000EE]'><Link to={"/projeto"}>Projetos</Link></li>
                <li className='mx-5 text-xl font-500 pointer hover:text-[#0000EE]'><Link to={"/contacto"}>Contacto</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar