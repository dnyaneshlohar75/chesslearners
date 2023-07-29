"use client"
import React from 'react'

const TreadMarks = () => {
  return (
    <section className = "w-full bg-gray-50">
        <div className = "max-w-7xl m-auto px-8 py-12">
            <div className = "grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-8">
                <div className = "text-center">
                    <h1 className = "text-3xl font-bold">12000+</h1>
                    <p className = "text-gray-600 text-sm">students</p>
                </div>
                <div className = "text-center">
                    <h1 className = "text-3xl font-bold">6000+</h1>
                    <p className = "text-gray-600 text-sm">tournaments</p>
                </div>
                <div className = "text-center">
                    <h1 className = "text-3xl font-bold">2057+</h1>
                    <p className = "text-gray-600 text-sm">sponsers</p>
                </div>
                <div className = "text-center">
                    <h1 className = "text-3xl font-bold">48+</h1>
                    <p className = "text-gray-600 text-sm">branches</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TreadMarks;