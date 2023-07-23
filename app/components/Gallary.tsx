"use client"
import React from 'react'

const Gallary = () => {

    return (
        <section className="w-full py-12 px-8">
            <div className="max-w-7xl m-auto flex flex-col items-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="font-bold text-3xl my-3">Gallary</h1>
                    <p className="text-gray-400 text-sm md:text-lg">
                        Inspiring images capturing coaching achievements,<br />fostering growth and success.
                    </p>
                    <div className='bg-indigo-500 w-12 h-1 my-3' />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3 my-8 gap-12">
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>

                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                    <div className="cursor-pointer w-full">
                        <img
                            className=""
                            src="https://www.apartments.com/images/librariesprovider2/blank-images/parkline-apartment-in-miami-flba486679-f59b-475d-885a-ae52659d1e51.jpg?sfvrsn=264e5d72_1"
                            alt=""
                        />
                    </div>
                </div>
                <button className="py-3 px-8 rounded-md text-indigo-700 font-semibold border border-indigo-700">
                    See More
                </button>
            </div>
        </section>

    )

}

export default Gallary