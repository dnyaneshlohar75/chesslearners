"use client"
import React from 'react'
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi'

const SocialLinksCard = () => {
    return (
        <div className="col-span-6 md:col-span-2 gap-8 bg-white p-5 border rounded-md">
            <p className="text-center text-xs text-indigo-700 font-medium uppercase mb-5 md:text-left">
                social links
            </p>
            <ul>
                <li className="border-b py-2 flex items-center gap-3">
                    <FiInstagram className = "text-indigo-700" />
                    <a href="#" className="text-sm">
                        dnyanesh.lohar.75 | Instagram
                    </a>
                </li>
                <li className="border-b py-2 flex items-center gap-3">
                    
                    <FiTwitter className = "text-indigo-700" />
                    <a href="#" className="text-sm">
                        dnyaneshlohar75 | Twitter
                    </a>
                </li>
                <li className="py-2 flex items-center gap-3">
                    <FiFacebook className = "text-indigo-700" />
                    <a href="#" className="text-sm">
                        dnyanesh.861 | Facebook
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialLinksCard