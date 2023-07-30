"use client"
import React from 'react'
import Image from 'next/image'
import { Button, TextField } from '@mui/material'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const SignUpForm = () => {

    const sendLoginDetails = async (singUpFormData: FormData) => {
        const firstname = singUpFormData.get('firstname')?.valueOf() as string;
        const lastname = singUpFormData.get('lastname')?.valueOf() as string;
        const email = singUpFormData.get('email')?.valueOf() as string;
        const password = singUpFormData.get('password')?.valueOf() as string;
        const confirmPassword = singUpFormData.get('confirmPassword')?.valueOf() as string;

        try {
            const req = await fetch('/api/v1/users/createAccount', {
                method: "POST",
                body: JSON.stringify({ 
                    firstname,
                    lastname,
                    email,
                    password
                 }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await req.json();
            console.log(res)
            if(res.acknowledge) {
                redirect('/user/profile')
            }
    
        } catch (err) {}
    }
    const logo = require("@/app/imgs/logo.png");

    return (
        <div className="flex flex-col items-center justify-between h-full p-10">
            <div className="flex flex-col items-center w-96 text-center">
                <Image src={logo} alt="logo" height={96} width={96} />
                <h1 className="text-2xl font-bold my-5">Welcome to<br />Chess Learners Academy</h1>
            </div>

            <form action = {sendLoginDetails} className="flex flex-col min-w-full gap-5">
                <TextField name="firstname" size="small" label="First Name" variant="outlined" required />
                <TextField name="lastname" size="small" label="Last Name" variant="outlined" required />
                <TextField name="email" size="small" label="Email or Mobile Number" variant="outlined" required />
                <TextField name="password" size="small" type="password" label="Password" variant="outlined" required />
                <TextField name="confimPassword" size="small" type="password" label="Confirm Password" variant="outlined" required />
                
                <Button className="bg-blue-600 text-white hover:text-blue-600 hover:outline-blue-600" type="submit"> Create an Account </Button>
            </form>

            <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="text-gray-500">Already you have an Account?</span>
                <Link href="#" className="font-bold text-blue-600">Sign In</Link>
            </div>
        </div>
    )
}

export default SignUpForm;
