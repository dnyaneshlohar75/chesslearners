"use client"
import React from 'react'
import Image from 'next/image'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'

const LoginForm = ({handleSession}:any) => {
    const sendLoginDetails = async (data: FormData) => {
        const username = data.get("username")?.valueOf() || '';
        const password = data.get("password")?.valueOf() || '';
        if (!username) {
            console.error("uname is required")
        }
        if (!password) {
            console.error("Password is required")
        }
        console.log(username, password);
    
        try {
            const req = await fetch('/api/v1/users', {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const res = await req.json();
            handleSession(res.acknoweledge);
    
        } catch (err) {}
    }
    const logo = require("@/app/imgs/logo.png");

    return (
        <div className="flex flex-col items-center justify-between h-full p-10">
            <div className="flex flex-col items-center w-96 text-center">
                <Image src={logo} alt="logo" height={96} width={96} />
                <h1 className="text-2xl font-bold my-5">Hello Again!</h1>
            </div>

            <form method = "POST" action = {() => sendLoginDetails} className="flex flex-col min-w-full gap-5">
                <TextField name="username" size="small" label="Email or Mobile Number" variant="outlined" required />
                <TextField name="password" size="small" type="password" label="Ex., Pass@123" variant="outlined" required />
                <div className='flex justify-end md:justify-between items-center'>
                    <FormControlLabel control={<Checkbox />} label="Remember me" className='hidden md:block text-xs' />
                    <a href="#" className='font-bold text-blue-500 text-xs'>Forgot Password</a>
                </div>
                <Button className="bg-blue-600 text-white hover:text-blue-600 hover:outline-blue-600" type="submit"> Login </Button>
                <Button onClick = {() => signIn("google")} variant="outlined" className='flex items-center gap-3'>
                    <FcGoogle className='text-xl' />
                    <span>Sign in with google</span>
                </Button>
            </form>

            <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="text-gray-500">Don&apos;t have an Account yet?</span>
                <Link href="#" className="font-bold text-blue-600">Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginForm;
