"use client"
import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { BsChevronDown } from 'react-icons/bs'
import { FaCircleCheck } from 'react-icons/fa6'
const MyPlan = () => {
  return (
    <div>
      <Accordion className="">
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          className=""
          expandIcon={<BsChevronDown />}
        >
          <div>
            <h1 className="block text-3xl font-bold">Serverless SaaS Membership</h1>
            <p className="block my-3 text-sm text-gray-500 pr-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum vitae blanditiis iste quas vero autem reprehenderit voluptates provident quisquam accusantium?</p>
          </div>
        </AccordionSummary>
        <div className = "px-4 flex items-center gap-3">
        <span className="uppercase text-sm font-bold text-indigo-600">what&apos;s included</span>
        <hr className = "inline-block flex-1"/>
        </div>
        <AccordionDetails className="flex">
          <div className = "flex-1">
            <div className="grid grid-cols-2">
              <div>
                <ul className="my-5 space-y-4 text-gray-500 font-semibold text-sm">
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Private repository access</li>
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Access to new updates</li>
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Additional SaaS resources</li>
                </ul>
              </div>
              <div>
                <ul className="my-5 space-y-4 text-gray-500 font-semibold text-sm">
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Private repository access</li>
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Access to new updates</li>
                  <li><FaCircleCheck size={20} className="inline text-green-500 mr-3" />Additional SaaS resources</li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className = "text-red-500 text-xl font-extrabold">Plan expires in 27 days (03 Aug 2023)</h1>
              <button className="my-5 px-4 py-3 font-bold text-gray-900 border-2 border-gray-900 rounded-md">Reactive Now</button>
              <button className="my-5 px-4 py-3 font-bold text-indigo-700 ">Change plan</button>
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-md text-center">
            <p className="line-through text-gray-600 text-sm font-semibold">₹299 /year</p>
            <h1 className="mt-3 font-extrabold text-5xl">₹149 <span className="font-normal text-base">/ year</span></h1>
            <button className="my-5 px-4 py-3 w-full font-semibold text-gray-100 bg-gray-900 rounded-md">Get Access</button>
            <p>or pick a <b>lifetime</b> plan</p>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MyPlan;