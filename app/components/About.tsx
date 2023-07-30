"use client"
import React from "react"
import ContactForm from "./sub/ContactForm"
import { SlPhone, SlEnvolope, SlLocationPin } from "react-icons/sl"

const About = () => {
    return (
        <section className="max-w-7xl m-auto">
            <div className="w-full p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className = "space-y-5">
                    <p className = "text-sm md:text-base text-justify text-gray-500">
                        Chess Learners Academy excels with an experienced team of international-level coaches, offering a comprehensive syllabus that enhances players from beginner to advanced levels. Supporting open FIDE rating tournaments, students achieve success in national and international chess competitions, guided to perfection in their pursuit of excellence.
                    </p>
                    <div className="flex items-center gap-3">
                            <p className="p-3 bg-gray-50 rounded-sm">
                                <SlPhone className="text-2xl text-indigo-700" />
                            </p>
                            <a href="tel:+919119548629" className="flex-1 text-gray-500 text-sm md:text-base">
                                +91 911 9548 629
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="p-3 bg-gray-50 rounded-sm">
                                <SlEnvolope className="text-2xl text-indigo-700" />
                            </p>
                            <a href="mailto:www.chesslearnersacademy@gmail.com" className="flex-1 text-gray-500 text-sm md:text-base">
                                www.chesslearnersacademy@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="p-3 bg-gray-50 rounded-sm">
                                <SlLocationPin className="text-2xl text-indigo-700" />
                            </p>
                            <p className="text-sm md:text-base flex-1 text-gray-500">
                                Vimalai Shankar Complex, in front of Hanumant Petrol Pump, Near Raje Shivaji School, Dharmaraj Nagar, Nandurbar 425 412.
                            </p>
                        </div>
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )

}

export default About;