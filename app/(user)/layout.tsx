"use client"
import Link from 'next/link'
import {FiUser, FiBell, FiSettings } from 'react-icons/fi'
import { GoRuby } from 'react-icons/go'
import { usePathname } from 'next/navigation'

const ProfileLayout = ({ children } : { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <div className="grid grid-cols-12 gap-5 max-w-7xl m-auto px-8">
      <aside className="hidden col-span-3 p-4 h-full md:flex flex-col items-center justify-between md:w-72">
        <nav className="w-full">
          <p className="text-center text-xs text-indigo-700 font-medium uppercase mb-5 md:text-left">
            dashboard
          </p>
          <ul className = "text-center md:text-left space-y-3">
            <Link href = "/profile" className = {`${!path.localeCompare('/profile') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiUser />
                <span className="hidden md:inline ml-5">Profile</span>
            </Link>
            <Link href = "/myplan" className = {`${!path.localeCompare('/myplan') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <GoRuby />
                <span className="hidden md:inline ml-5">My Plan</span>
            </Link>
            <Link href = "#" className = {`${!path.localeCompare('/nofications') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiBell />
                <span className="hidden md:inline ml-5">Notifications</span>
            </Link>
            <Link href = "#" className = {`${!path.localeCompare('/settings') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiSettings />
                <span className="hidden md:inline ml-5">Settings</span>
            </Link>
          </ul>
        </nav>
      </aside>
      <aside className="sm:hidden md:hidden bg-white fixed left-0 bottom-0 border-t p-4 flex items-center justify-between w-full z-50">
        <nav className="w-full">
          <ul className = "text-center flex items-center justify-evenly w-full">
            <Link href = "/profile" className = {`${!path.localeCompare('/profile') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiUser />
            </Link>
            <Link href = "/myplan" className = {`${!path.localeCompare('/myplan') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <GoRuby />
            </Link>
            <Link href = "#" className = {`${!path.localeCompare('/nofications') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiBell />
            </Link>
            <Link href = "#" className = {`${!path.localeCompare('/settings') ? 'bg-indigo-800 text-gray-50' : 'text-gray-400'} hover:bg-gray-50 hover:text-indigo-700 py-3 px-4 rounded-md flex items-center gap-3`}>
                <FiSettings />
            </Link>
          </ul>
        </nav>
      </aside>
      <section className="col-span-12 md:col-span-9">
          {children}
      </section>
    </div>
  )
}

export default ProfileLayout;