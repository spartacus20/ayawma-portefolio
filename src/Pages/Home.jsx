import React from 'react'
import im1 from '../images/imagem1.svg'

function Home() {
  document.title = "Ayawma"
  return (
    <>

      <div className='w-full min-h-[150px] bg-[#F9F9F9] xl:px-48 sm:px-10 xl:mt-[150px] '>
        <div className='flex xl:flex-row sm:flex-col'>
          <div className='flex flex-col'>
            <h1 className='font-bold xl:text-[4rem] sm:text-center sm:text-[3rem] leading-[3.9rem] mt-36'>Cria o teu site à medida</h1>
            <p className='text-gray-600 mt-8 xl:w-[350px] sm:text-lg  text-justify xl:ml-11'>Cada negócio é único assim como os seus objetivos, não opte por um site igual aos outros.
              Criamos o seu site à imagem do seu negócio, com a sua identidade e com vista a atingir os seus objetivos.</p>
          </div>
          <div className='flex'>
            <img src={im1} alt="" className='w-[600px] h-[500px] object-cover' />
          </div>
        </div>

      </div>
      <div className='bg-white h-[500px] mt-36 shadow-xl '>


      </div>

    </>
  )
}

export default Home