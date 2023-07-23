"use client"
import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div>
            <div className='w-full bg-black px-8'>
                <footer className='max-w-7xl m-auto text-center text-gray-400 py-5'>
                    <p className = "text-sm md:text-base">© All rights are reserved 2023 | <Link href='/' className='text-indigo-700'>Chess Learners Academy</Link></p>
                </footer>
            </div>
        </div>
    )
}

export default Footer;