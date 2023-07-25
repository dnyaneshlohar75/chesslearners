import React from 'react'

const ProfileCard = () => {
    return (
        // <div classNameName="col-span-6 flex gap-8 bg-white p-5 border rounded-md">
        //     <div classNameName="w-32 rounded-full overflow-hidden">
        //         <img
        //             classNameName="w-full h-full object-cover"
        //             src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
        //             alt=""
        //         />
        //     </div>
        //     <div classNameName="flex-1">
        //         <h1 classNameName="font-bold text-2xl mb-1 text-center md:text-left">Dnyanesh Lohar</h1>
        //         <p classNameName="text-sm text-gray-400 text-center md:text-left">
        //             26<sup>th</sup> Nov 2001
        //         </p>
        //         <hr classNameName="my-3" />
        //         <div classNameName="flex items-center gap-12">
        //             <div classNameName="rounded-md">
        //                 <span classNameName="text-xs text-gray-400">FIDE Rating</span>
        //                 <p classNameName="tracking-wider text-indigo-700 sm:text-sm md:text-base font-medium">
        //                     1342
        //                 </p>
        //             </div>
        //             <div classNameName = "flex flex-col items-center justify-between gap-5">
        //             <div classNameName="rounded-md">
        //                 <span classNameName="text-xs text-gray-400">Phone</span>
        //                 <br />
        //                 <a
        //                     href="callto:+917499378600"
        //                     classNameName="tracking-wider text-indigo-700 sm:text-sm md:text-base font-medium"
        //                 >
        //                     +91 7499 378 600
        //                 </a>
        //             </div>
        //             <div classNameName="rounded-md">
        //                 <span classNameName="text-xs text-gray-400">Mail</span>
        //                 <br />
        //                 <a
        //                     href="mailto:dnyaneshlohar75@gmail.com"
        //                     classNameName="tracking-wider text-indigo-700 sm:text-sm md:text-base font-medium"
        //                 >
        //                     dnyaneshlohar75@gmail.com
        //                 </a>
        //             </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="col-span-6 flex flex-col md:flex-row gap-8 items-center bg-white p-5 border rounded-md">
    <div className="w-32 rounded-full overflow-hidden">
        <img
            className="w-full h-full object-cover"
            src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg"
            alt=""
        />
    </div>
    <div className="flex-1">
        <h1 className="font-bold text-2xl mb-1 text-center md:text-left">Dnyanesh Lohar</h1>
        <p className="text-sm text-gray-400 text-center md:text-left">
            26<sup>th</sup> Nov 2001
        </p>
        <hr className="my-3" />
        <div className="flex flex-col md:flex-row md:items-center md:gap-12">
            <div className="rounded-md">
                <span className="text-xs text-gray-400">FIDE Rating</span>
                <p className="tracking-wider text-indigo-700 text-sm md:text-base font-medium">
                    1342
                </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-start justify-between md:gap-5">
                <div className="rounded-md">
                    <span className="text-xs text-gray-400">Phone</span>
                    <br />
                    <a
                        href="tel:+917499378600"
                        className="tracking-wider text-indigo-700 text-sm md:text-base font-medium"
                    >
                        +91 7499 378 600
                    </a>
                </div>
                <div className="rounded-md">
                    <span className="text-xs text-gray-400">Mail</span>
                    <br />
                    <a
                        href="mailto:dnyaneshlohar75@gmail.com"
                        className="tracking-wider text-indigo-700 text-sm md:text-base font-medium"
                    >
                        dnyaneshlohar75@gmail.com
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default ProfileCard;