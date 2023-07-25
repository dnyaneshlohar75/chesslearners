import React from 'react'
import { FiCalendar } from 'react-icons/fi'
import { BsGenderMale } from 'react-icons/bs'
import { TbLocation } from 'react-icons/tb'
import { FaRegChessRook } from 'react-icons/fa6'
const PersonalInfoCard = () => {
    return (
        <div className="col-span-6 md:col-span-4 gap-8 bg-white p-5 border rounded-md">
            <p className="text-xs text-indigo-700 font-medium uppercase mb-5 md:text-left">
                personal information
            </p>
            <ul>
                <li className="flex items-center gap-5 border-b py-2">
                    <FiCalendar className = "text-indigo-700" />
                    <span className="text-sm">
                        26<sup>th</sup> November 2001 (23 years)
                    </span>
                </li>
                <li className="flex items-center gap-5 border-b py-2">
                    <BsGenderMale className = "text-indigo-700" />
                    <span className="text-sm">Male</span>
                </li>
                <li className="flex items-center gap-5 border-b py-2">
                    <TbLocation className = "text-indigo-700" />
                    <span className="text-sm">
                        Near Amar Cinema, Mangal Bazar Road Nandurbar 425 412 (Maharashtra)
                    </span>
                </li>
                <li className="flex items-center gap-5 py-2">
                    <FaRegChessRook className = "text-indigo-700" />
                    <span className="text-sm">Ashwameghraj Chess Club, Nandurbar</span>
                </li>
            </ul>
        </div>

    )
}

export default PersonalInfoCard;