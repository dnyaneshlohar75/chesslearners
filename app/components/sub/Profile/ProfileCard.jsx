"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
const ProfileCard = () => {
    const { data, status} = useSession();

    const [user, setUser] = React.useState([null]);

    React.useEffect( () => {
        const fetchdata = async () => {
            const response = await fetch(`/api/v1/users/getUserDetails?email=${data?.user?.email}`)
            const result = await response.json()
            setUser(result)
        }

        if(status === "authenticated") 
            fetchdata();
    }, [])

    return (
        <div className="col-span-6 flex flex-col md:flex-row w-full items-center justify-center p-5 md:gap-12 bg-white border rounded-md">
            <div className="w-32 rounded-full overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src = {user?.image}
                    alt=""
                />
            </div>
            <div className="flex-1 w-full">
                <h1 className="font-bold text-2xl mb-1 text-center md:text-left">{user.name}</h1>
                <p className="text-sm text-gray-400 text-center md:text-left">
                    {user.dob ? user.dob : "-"}
                </p>
                <hr className="my-3" />
                <div className="flex flex-col md:flex-row md:items-center md:gap-12">
                    <div className="rounded-md">
                        <span className="text-xs text-gray-400">FIDE Rating</span>
                        <p className="tracking-wider text-indigo-700 text-sm md:text-base font-medium">
                            {user.fiderating ? user.fiderating : "-"}
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between md:gap-5">
                        <div className="rounded-md">
                            <span className="text-xs text-gray-400">Phone</span>
                            <br />
                            <a
                                href={`tel:+91${user.mobileNum}`}
                                className="tracking-wider text-indigo-700 text-sm md:text-base font-medium"
                            >
                                +91{user.mobileNum ? user.mobileNum : "-"}
                            </a>
                        </div>
                        <div className="rounded-md">
                            <span className="text-xs text-gray-400">Mail</span>
                            <br />
                            <a
                                href= {`mailto:${user.email}`}
                                className="tracking-wider text-indigo-700 text-sm md:text-base font-medium"
                            >
                                {user.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProfileCard;