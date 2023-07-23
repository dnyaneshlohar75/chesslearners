"use client"
import React from 'react'
import { Avatar, Badge } from '@mui/material'
import {BiSolidQuoteAltRight} from 'react-icons/bi'
import {FaLocationDot} from 'react-icons/fa6'
import Carousel from 'react-material-ui-carousel'

const Quotes = () => {
    return (
        <div className="w-full py-16 bg-white">
            <div className="max-w-7xl m-auto px-8">
                <div className = "w-full flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-bold'>Some <strong>Best Quotes</strong> for You</h1>
                    <div className='bg-indigo-500 w-12 h-1 my-3' />
                </div>

                <Carousel>
                    <div className="w-[570px] m-auto h-56 flex items-center gap-12 justify-center my-8">
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            badgeContent={
                                <span className = "bg-indigo-500 rounded-full p-2 text-gray-100 text-lg"><BiSolidQuoteAltRight/> </span>
                            }
                        >
                            <Avatar alt="Vishawanathan Anand"
                            className = "grayscale"
                            sx = {{width: 112, height: 112}} src="https://starsunfolded.com/wp-content/uploads/2018/02/standard_8396729726_5790029d6a_o-compressed.jpg" />
                        </Badge>
                        <div>
                            <p className = "font-bold text-lg">To be the best, you must be able to handle the worst.</p>
                            <p className = "mt-3">- Vishwanathan Anand, Grand Master</p>
                            <p className = "flex items-center gap-1 text-gray-600"><FaLocationDot /> India</p>
                        </div>
                    </div>

                    <div className="w-[570px] m-auto h-56 flex items-center gap-12 justify-center my-8">
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            badgeContent={
                                <span className = "bg-indigo-500 rounded-full p-2 text-gray-100 text-lg"><BiSolidQuoteAltRight/> </span>
                            }
                        >
                            <Avatar alt="Garry Kasparov"
                            className = "grayscale"
                            sx = {{width: 112, height: 112}} src="https://i.guim.co.uk/img/media/feb47280aa46b8cdee78738f64d5582542424f2f/0_312_1772_1063/master/1772.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c1a978ac3f742f0151602951066e5f86" />
                        </Badge>
                        <div>
                            <p className = "font-bold text-lg">We have to always look ahead enough moves to be well prepared, even for victory!</p>
                            <p className = "mt-3">- Garry Kasparov, Grand Master</p>
                            <p className = "flex items-center gap-1 text-gray-600"><FaLocationDot /> Russia</p>
                        </div>
                    </div>

                    <div className="w-[570px] m-auto h-56 flex items-center gap-12 justify-center my-8">
                        <Badge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                            badgeContent={
                                <span className = "bg-indigo-500 rounded-full p-2 text-gray-100 text-lg"><BiSolidQuoteAltRight/> </span>
                            }
                        >
                            <Avatar alt="Magnus Carlsen"
                            className = "grayscale"
                            sx = {{width: 112, height: 112}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Carlsen_Magnus_%2830238051906%29.jpg/1464px-Carlsen_Magnus_%2830238051906%29.jpg" />
                        </Badge>
                        <div>
                            <p className = "font-bold text-lg">Some people think that if their opponent plays a beautiful game, it&apos;s OK to lost. I don&apos;t. You have to be merciless.</p>
                            <p className = "mt-3">- Magnus Carlsen, Grand Master</p>
                            <p className = "flex items-center gap-1 text-gray-600"><FaLocationDot /> Norwegian</p>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Quotes;