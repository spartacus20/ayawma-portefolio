import React from 'react'
import im1 from '../images/imagem1.svg'
import Page from '../Assets/page.js'
import Responsive from '../Assets/responsive.js'
function Home() {
  document.title = "Ayawma"
  return (
    <>

      <div className='w-full min-h-[150px] bg-[#F9F9F9] xl:px-48 sm:px-10 xl:mt-[150px] '>
        <div className='flex xl:flex-row sm:flex-col'>
          <div className='flex flex-col'>
            <h1 className='font-bold xl:text-[4rem] xl:text-left xl:ml-10 sm:text-center sm:text-4xl leading-[3.9rem] mt-36'>Cria o teu site à medida</h1>
            <p className='text-gray-600 mt-8 xl:w-[430px] sm:text-lg  text-justify xl:ml-11 '>Cada negócio é único assim como os seus objetivos, não opte por um site igual aos outros.
              Criamos o seu site à imagem do seu negócio, com a sua identidade e com vista a atingir os seus objetivos.</p>
          </div>
          <div className='flex'>

            <img src={im1} alt="" className='xl:w-[600px] xl:h-[500px] xl:object-cover sm:w-[350px] sm:h-[250px] object-cover' />
          </div>
        </div>
      </div>
      <div className='bg-white min-h-[500px] sm:py-24 sm:mt-28 xl:mt-36 shadow-xl  flex xl:flex-row sm:flex-col justify-center items-center'>

        <div className='w-[200px] h-[200px]  mx-8 sm:my-8'>
          <Page />
          <h4 className='text-center xl:text-xl sm:text-lg'>Reponsive</h4>
        </div>
        <div className='w-[200px] h-[200px]  mx-8 sm:my-8'>
        <Page />
          <h4 className='text-center xl:text-xl sm:text-lg'>SEO</h4>
        </div>
        <div className='w-[200px] h-[200px] mx-8 sm:my-8'>
          <Page />
          <h4 className='text-center xl:text-xl sm:text-lg'>Design gráfico</h4>
        </div>
      </div>
      <div>
        <h3>Responsive</h3>
      </div>

    </>
  )
}

export default Home