"use client"
import React from 'react'
import Link from 'next/link'
import { FaLocationDot } from 'react-icons/fa6'

const TournamentCard = ({ tid, date, title, venue }: any) => {
  const formatDate = new Date(date)

  return (
    <div className="shadow-lg flex-1 m-auto bg-gray-50 flex flex-col md:flex-row mt-8 rounded-md bg-blend-screen">
      <div className="rounded-l bg-gray-600 flex flex-col justify-between p-5 h-48 bg-blend-multiply" />
      <div className="flex flex-col justify-between p-5 w-full">
        <div className="flex justify-between gap-5">
          <div>
            <p className="text-sm text-gray-400 font-semibold">
              {formatDate.getDay() + "/" + formatDate.getMonth() + "/" + formatDate.getFullYear()}
            </p>
            <h1 className="font-bold text-3xl text-orange-500 pr-8">
              {title}
            </h1>
          </div>
          <p className="text-sm text-gray-400 font-semibold text-right">
            {formatDate.toLocaleDateString('en', { weekday: 'long' }).toUpperCase()}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400 font-semibold flex items-center gap-2">
            <FaLocationDot /> {venue}
          </p>
          <Link href={`/tournaments?tid=${tid}`} className="p-3 bg-gray-500 rounded-md text-sm text-gray-50 font-semibold hover:bg-orange-600">
            Apply Now
          </Link>
        </div>
      </div>
    </div>

  )
}

export default TournamentCard;