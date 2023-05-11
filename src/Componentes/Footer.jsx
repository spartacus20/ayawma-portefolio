import React from 'react'
import im1 from "../images/Mi proyecto2.png"
function Footer() {
    return (

        <footer className="bg-[#2D2E32] bottom-0  w-full mt-[150px]">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 flex justify-center align-center">
                        <a href="/" className="flex items-center">
                            <img src={im1} className="h-8 mr-3" alt="FlowBite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Ayawma</span>
                        </a>
                    </div>
                    <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm  text-gray-500 sm:text-center sm:mx-auto dark:text-gray-400">© 2023 <a href="https://ayawma.com/" className="hover:underline">Ayawma™</a>. All Rights Reserved.
                    </span>
                   
                </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            </div>
        </footer>

    )
}

export default Footer