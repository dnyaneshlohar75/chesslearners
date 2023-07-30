"use client"
import React from 'react'
import Drawer from '@mui/material/Drawer';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, redirect } from 'next/navigation'
import { SlMenu } from 'react-icons/sl'
import Dialog from '@mui/material/Dialog';
import { FiX, FiLogOut } from 'react-icons/fi'
import LoginForm from './LoginForm';
import { Avatar, Tooltip } from '@mui/material';
import { signIn, useSession, signOut } from 'next-auth/react'
import SignUpForm from './SignUpForm';

const Navbar = () => {
  const logo = require('@/app/imgs/logo.png');
  const path = usePathname();
  const session = useSession();
  
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [loginFormDialog, setLoginFormDialog] = React.useState(false);
  const [signUpFormDialog, setSignUpFormDialog] = React.useState(false);
  return (
    <section className="max-w-7xl m-auto">          
          <header className="px-8 flex items-center justify-between py-5">
            <div className="flex items-center gap-5 md:gap-12">
              <Link href = "/"><Image src={logo} width={64} height={64} alt="logo" /></Link>
              <SlMenu className = "cursor-pointer md:hidden"  onClick = {() => setDrawerOpen(true)}/>
              <Drawer
                open = {drawerOpen}
                onClose = {() => setDrawerOpen(false)}
              >
                <nav className="w-56">
                  <ul className="gap-3">
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
            
            {session.status == "authenticated" ?
            <div className = "flex items-center gap-5">
              <Tooltip title = "Profile">
                <Link href = "/user/profile">
                    <Avatar sx = {{width: 32, height: 32}}>
                      <img src = {session.data?.user?.image || ""} />
                    </Avatar>
                </Link>
              </Tooltip>
              <Tooltip title = "Logout">
                <button onClick = {() => signOut()}>
                  <FiLogOut />
                </button>
              </Tooltip>
            </div>
            :
            <div>
              <button onClick = {() => setLoginFormDialog(true)} className="text-xs sm:text-sm md:text-base font-semibold py-3 px-7 hover:text-indigo-700">
                Log In
              </button>
              <Dialog open = {loginFormDialog} onClose = {() => setLoginFormDialog(false)}>
                  <FiX onClick = {() => setLoginFormDialog(false)} className = "absolute right-5 top-5 text-2xl cursor-pointer"/>
                  <LoginForm />
              </Dialog>
              <button onClick = { () => setSignUpFormDialog(true)} className="text-xs sm:text-sm md:text-base py-3 px-7 text-indigo-700 font-semibold border border-indigo-700">
                Sign Up
              </button>
              <Dialog open = {signUpFormDialog} onClose = {() => setSignUpFormDialog(false)}>
                  <FiX onClick = {() => setSignUpFormDialog(false)} className = "absolute right-5 top-5 text-2xl cursor-pointer"/>
                  <SignUpForm />
              </Dialog>
            </div>
            }
          </header>
        </section>
  )
}

export default Navbar;