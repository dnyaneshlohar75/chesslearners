"use client"
import Link from 'next/link';
import React from 'react'

const Pricing = () => {
    return (
        <div className='hidden md:block max-w-7xl m-auto p-14'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-3xl font-bold'>Get Courses</h1>
                <div className='bg-indigo-500 w-12 h-1 my-3' />
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-8'>
                    <div className='cursor-pointer transiton duration-200 rounded-md p-8 bg-white hover:shadow-md w-[300px]'>
                        <h1 className='text-3xl font-semibold'>Free*</h1>
                        <p className='text-gray-500 my-3'> Get your bussiness up <br />
                            and running
                        </p>
                        <div className='flex my-3'>
                            <h1 className='text-4xl font-bold'>₹0</h1>
                            <span className='align-sub text-gray-500'>/Monthly</span>
                        </div>

                        <Link href={`/subscription/${'Free'}`} className='text-sm rounded-md px-5 py-3 bg-gray-500 hover:bg-indigo-500 transition duration-300 text-white font-semibold'>
                            Get Started Free
                        </Link>
                        <ul className='text-sm text-gray-400 space-y-3 py-8'>
                            <li>Drag & Drop Builder</li>
                            <li>Lead Generation & Sales</li>
                            <li>Boot & Digital Assistant</li>
                            <li>Customer Service</li>
                            <li>Up to 1000 Subscribers</li>
                        </ul>
                    </div>

                    <div className='cursor-pointer transiton duration-200 rounded-md p-8 bg-white shadow-md w-[300px]'>
                        <h1 className='text-3xl font-semibold'>Pro</h1>
                        <p className='text-gray-500 my-3'> Get your bussiness up <br />
                            and running
                        </p>
                        <div className='flex my-3'>
                            <h1 className='text-4xl font-bold'>₹149</h1>
                            <span className='align-sub text-gray-500'>/Monthly</span>
                        </div>

                        <Link href={`/subscription/${'Professional'}`} className='text-sm rounded-md px-5 py-3 bg-gray-500 hover:bg-indigo-500 transition duration-300 text-white font-semibold'>
                            Start 3 Days Free Trial
                        </Link>
                        <ul className='text-sm text-gray-400 space-y-3 py-8'>
                            <li>Drag & Drop Builder</li>
                            <li>Lead Generation & Sales</li>
                            <li>Boot & Digital Assistant</li>
                            <li>Customer Service</li>
                            <li>Up to 1000 Subscribers</li>
                        </ul>
                    </div>

                    <div className='cursor-pointer transiton duration-200 rounded-md p-8 bg-white hover:shadow-md w-[300px]'>
                        <h1 className='text-3xl font-semibold'>Premium</h1>
                        <p className='text-gray-500 my-3'> Get your bussiness up <br />
                            and running
                        </p>
                        <div className='flex my-3'>
                            <h1 className='text-4xl font-bold'>₹249</h1>
                            <span className='align-sub text-gray-500'>/Monthly</span>
                        </div>

                        <Link href={`/subscription/${'Premium'}`} className='text-sm rounded-md px-5 py-3 bg-gray-500 hover:bg-indigo-500 transition duration-300 text-white font-semibold'>
                            Start 6 Days Free Trial
                        </Link>
                        <ul className='text-sm text-gray-400 space-y-3 py-8'>
                            <li>Drag & Drop Builder</li>
                            <li>Lead Generation & Sales</li>
                            <li>Boot & Digital Assistant</li>
                            <li>Customer Service</li>
                            <li>Up to 1000 Subscribers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
