"use client"
import React from 'react'
import Switch from '@mui/material/Switch';
import { TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { FiCheck, FiX } from 'react-icons/fi'
const Settings = () => {
    const [enable, setEnable] = React.useState({
        togglerFirst: false,
        togglerSecond: false,
    });
    const [validPassword, setValidPassword] = React.useState(false);
    const [pass, setPass] = React.useState('');
    const handleToggle = (key:any) => {
        setEnable((prevState:any) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    const checkValidPassword = async (currentPassword:string) => {
        setPass(currentPassword);
        const api = fetch(`/api/v1/${currentPassword}`, {
            method: "POST",
        }).then(async (result) => {
            const res = await result.json();
            setValidPassword(res.acknowledge);
        })
        // setValidPassword(result);
    }
    return (
        <section className="w-full">
            <div className="flex flex-col gap-5 mb-24">
                <div className="bg-white p-5 rounded-md border">
                    <div className = "mb-3">
                        <h1 className="font-semibold md:text-lg">Change Password</h1>
                        <p className="text-gray-400 text-xs md:text-sm">Here to update their existing password for improved account security.</p>
                    </div>
                    <p className="font-semibold text-sm my-1">Current Password <span className = "text-red-400">*</span></p>
                    <TextField
                        type='password'
                        className="w-full"
                        id="outlined-size-small"
                        size="small"
                        required
                        onChange = {(e) => checkValidPassword(e.target.value)}
                    />
                    {pass ? validPassword ? <p className = "text-green-500 text-xs md:text-sm">Password Varified</p> : <p className = "text-red-500 text-xs md:text-sm">Password Invalid</p> : null}
                    <form action="" className = "py-3">
                        <div className = "flex items-center justify-between gap-5">
                            <div className = "w-full">
                                <p className="font-semibold text-sm my-1">New Password <span className = "text-red-400">*</span></p>
                                <TextField
                                    type='password'
                                    fullWidth
                                    id="outlined-size-small"
                                    size="small"
                                    required
                                />
                            </div>
                            <div className = "w-full">
                                <p className="font-semibold text-sm my-1">Confirm New Password <span className = "text-red-400">*</span></p>
                                <TextField
                                    type='password'
                                    fullWidth
                                    id="outlined-size-small"
                                    size="small"
                                    required
                                />
                            </div>
                        </div>
                        <button className="px-4 py-3 mt-3 bg-indigo-700 rounded-md font-medium text-xs md:text-sm text-gray-50">
                            Save changes
                        </button>
                        </form>
                    </div>
                <div className="bg-white p-5 rounded-md border flex items-center justify-between w-full">
                    <div>
                        <h1 className="font-semibold md:text-lg">Enable Dark Screen Mode</h1>
                        <p className="text-gray-400 text-xs md:text-sm">It enables darker colors to reduce eye strain and improve readability in low-light conditions.</p>
                    </div>
                    <div>
                        <Switch checked={enable.togglerFirst} onChange={() => handleToggle('togglerFirst')} />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-md border flex items-center justify-between w-full">
                    <div>
                        <h1 className="font-semibold md:text-lg">Enable Notifications on email</h1>
                        <p className="text-gray-400 text-xs md:text-sm">It enables sends emails and notification for updates.</p>
                    </div>
                    <div>
                    <Switch checked={enable.togglerSecond} onChange={() => handleToggle('togglerSecond')} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings