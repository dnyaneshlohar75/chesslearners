"use client"
import './globals.css'
import Drawer from '@mui/material/Drawer';
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SlMenu } from 'react-icons/sl'
import Dialog from '@mui/material/Dialog';
import { FiX } from 'react-icons/fi'
import LoginForm from './components/LoginForm';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const logo = require('./imgs/logo.png');
  const path = usePathname();
  const [openDialog, setOpenDialog] = useState(false)
  const [open, setOpen] = useState(false)
  const isSidebarOpen = () => {
    setOpen(!open);
  }
  const handleDialog = () => {
    setOpenDialog(!openDialog)
  }
  return (
    <html>
      <Head>
        <title>Home | Chess learners</title>
      </Head>
      <body>
        <section className="max-w-7xl m-auto">
          <header className="px-8 flex items-center justify-between py-5">
            <div className="flex items-center gap-5 md:gap-12">
              <Image src={logo} width={64} height={64} alt="logo" />
              <SlMenu className = "cursor-pointer md:hidden" onClick = {isSidebarOpen}></SlMenu>
              <Drawer
                open = {open}
                onClose = {isSidebarOpen}
              >
                <nav className="w-52">
                  <ul className="flex flex-col gap-3">
                    <li className={`${!path.localeCompare('/') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} w-full p-3 hover:bg-gray-50 text-gray-300 hover:text-indigo-700`}>
                      <Link href="/">Home</Link>
                    </li>
                    <li className={`${!path.localeCompare('/tournaments') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} w-full p-3 hover:bg-gray-50 text-gray-300 hover:text-indigo-700`}>
                      <Link href="/tournaments">Tournaments</Link>
                    </li>
                    <li className={`${!path.localeCompare('/classes') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} w-full p-3 hover:bg-gray-50 text-gray-300 hover:text-indigo-700`}>
                      <Link href="/classes">Classes</Link>
                    </li>
                    <li className={`${!path.localeCompare('#contact') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} w-full p-3 hover:bg-gray-50 text-gray-300 hover:text-indigo-700`}>
                      <Link href="#contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </Drawer>
              
              <Dialog open={openDialog} className = "relative">
                  <FiX onClick = {handleDialog} className = "absolute right-5 top-5 text-2xl cursor-pointer"/>
                  <LoginForm />
              </Dialog>

              <nav className="hidden md:block">
                <ul className="flex items-center gap-12">
                  <li className={`${!path.localeCompare('/') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} hover:text-indigo-700 text-gray-300`}>
                    <Link href="/">Home</Link>
                  </li>
                  <li className={`${!path.localeCompare('/tournaments') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} hover:text-indigo-700 text-gray-300`}>
                    <Link href="/tournaments">Tournaments</Link>
                  </li>
                  <li className={`${!path.localeCompare('/classes') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} hover:text-indigo-700 text-gray-300`}>
                    <Link href="/classes">Classes</Link>
                  </li>
                  <li className={`${!path.localeCompare('#contact') ? 'text-indigo-700 font-semibold' : 'text-gray-400'} hover:text-indigo-700 text-gray-300`}>
                    <Link href="#contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <button onClick = {handleDialog} className="text-xs sm:text-sm md:text-base font-semibold py-3 px-7 hover:text-indigo-700">
                Log In
              </button>
              <button className="text-xs sm:text-sm md:text-base py-3 px-7 text-indigo-700 font-semibold border border-indigo-700">
                Sign Up
              </button>
            </div>
          </header>
        </section>

        {/* Rendering Children Components */}
        <section>
          {children}
        </section>
        
      </body>
    </html>
  )
}
