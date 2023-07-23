"use client"
import React from 'react'

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
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-regular fa-lightbulb text-7xl mb-5" />
                        <h1 className="text-gray-400">Creativity</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-bullseye text-7xl mb-5" />
                        <h1 className="text-gray-400">Concentration</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-spa text-7xl mb-5" />
                        <h1 className="text-gray-400">Self Control</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-check text-7xl mb-5" />
                        <h1 className="text-gray-400">Decision Making</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-regular fa-clock text-7xl mb-5" />
                        <h1 className="text-gray-400">Patience</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-clipboard text-7xl mb-5" />
                        <h1 className="text-gray-400">Planning</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-puzzle-piece text-7xl mb-5" />
                        <h1 className="text-gray-400">Problem solving</h1>
                    </div>
                    <div className="flex items-center justify-center flex-col p-5 w-52 h-52 hover:bg-slate-50">
                        <i className="text-red-500 fa-solid fa-brain text-7xl mb-5" />
                        <h1 className="text-gray-400">Increase IQ</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Benefits;