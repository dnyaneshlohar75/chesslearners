"use client"
import React from 'react'
import { FaLightbulb, FaBullseye, FaSpa, FaCheck, FaClock, FaClipboard, FaPuzzlePiece, FaBrain } from 'react-icons/fa6'
const Benefits = () => {
    return (
        <section className="w-full py-12">
            <div className="max-w-7xl m-auto flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="font-bold text-3xl my-3">Benefits of chess</h1>
                    <div className='bg-indigo-500 w-12 h-1 my-3' />
                    {/* <p class = "text-gray-400 text-lg">See the feature properties and explore all of that to know more<br />about our real estate properties very easily.</p> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-12">
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaLightbulb className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Creativity</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaBullseye className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Concentration</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaSpa className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Self Control</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaCheck className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Decision Making</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaClock className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Patience</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaClipboard className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Planning</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaPuzzlePiece className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Problem solving</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 transform hover:-translate-y-1 transition-all duration-200 ease-in-out cursor-pointer hover:bg-slate-50">
                        <FaBrain className="text-red-500 text-5xl mb-5" />
                        <h1 className="text-gray-400">Increase IQ</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;