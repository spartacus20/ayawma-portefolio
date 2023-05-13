import React from 'react'
import im1 from '../images/imagem1.svg'

function Home() {
  document.title = "Ayawma"
  return (
    <div className='w-full min-h-[150px] bg-[#F9F9F9] xl:px-48 sm:px-10 mt-[150px] '>
      <div className='flex xl:flex-row sm:flex-col'>
        <h1 className='font-bold xl:text-[4rem] sm:text-center sm:text-[3rem] leading-[3.9rem] mt-36'>Cria o teu site à medida</h1>
        <div className='flex'>
          <img src={im1} alt="" className='w-[600px] h-[500px] object-cover' />
        </div>

      </div>

    </div>
  )
}

export default Home