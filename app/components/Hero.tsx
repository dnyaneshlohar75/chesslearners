"use client"
import React from 'react'
import { FaPlay } from 'react-icons/fa6'
import { useSession } from 'next-auth/react'
const Hero = () => {
  return (
    <section className="max-w-7xl m-auto my-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className = "text-center md:text-left flex flex-col items-center justify-center md:block">
          <span className="uppercase text-sm font-semibold text-indigo-700">
            get a featured chess coaching in nandurbar
          </span>
          <h1 className="text-4xl md:text-6xl font-bold py-3">
            Master the Game
            <br />
            in Chess
          </h1>
          <p className="text-gray-400 text-sm md:text-lg md:text-justify py-3">
            We are a premier institution dedicated to nurturing young minds with the
            art of chess. Our expert coaches provide personalized guidance,
            fostering strategic thinking, and enhancing problem-solving skills.
          </p>
          <div className="space-x-5 my-8 flex items-center">
            <button className="text-sm md:text-base bg-indigo-700 text-indigo-50 px-6 py-3 rounded-md hover:shadow-lg">
              Get Started
            </button>
            <button className="bg-red-500 text-gray-50 p-4 rounded-full hover:shadow-lg">
              <FaPlay className = "text-base md:text-lg" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-full">
            <img
              className="w-full rounded-xl h-full object-cover"
              src="https://img.freepik.com/premium-photo/chess-pieces-closeup-light-background-generative-ai_169016-29012.jpg"
              alt=""
            />
            <div className="absolute top-12 -right-28 rounded-xl shadow-md bg-white w-44 p-3">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="https://cdn.dmcl.biz/media/image/274680/o/GettyImages-1246641079.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="absolute bottom-12 -left-36 rounded-xl shadow-md bg-white w-60 p-3">
              <div className="w-full overflow-hidden rounded-lg">
                <img
                  src="https://chessforsharks.com/wp-content/uploads/2022/01/fischer-spassky-1024x638.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero;