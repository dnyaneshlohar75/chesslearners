"use client"
import React from 'react'
import Switch from '@mui/material/Switch';
import { TextField } from '@mui/material';
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

const Settings = () => {
    const [enable, setEnable] = React.useState({
        togglerFirst: false,
        togglerSecond: false,
    });

    const [validPassword, setValidPassword] = React.useState(false);
    const [pass, setPass] = React.useState('');
    const [passwordChangeResult, setPasswordChangeResult] = React.useState(undefined);

    const handleToggle = (key: any) => {
        setEnable((prevState: any) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    }

    const checkValidPassword = async (currentPassword: string) => {
        setPass(currentPassword);
        const api = fetch("/api/v1/users/changePassword", {
            method: "POST",
            body : JSON.stringify({currentPassword}),
        }).then(async (result) => {
            const res = await result.json();
            setValidPassword(res.acknowledge);
        })
    }

    const handleChangePasswordForm = async (changePasswordForm: FormData) => {
        const newPassword = changePasswordForm.get("newpass")?.valueOf().toString() || '';
        const confirmPassword = changePasswordForm.get("confirmpass")?.valueOf().toString() || '';

        if (newPassword?.localeCompare(confirmPassword)) {
            toast.error("New password and confirm password not matched.");
            return;
        }

        try {
            const api = await fetch('/api/v1/users/changePassword', {
                method: "PATCH",
                body: JSON.stringify({ userId: 101, newPassword, confirmPassword }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            const result = await api.json();
    
            setPasswordChangeResult(result.acknowledge);
    
            if(!passwordChangeResult) {
                toast.success("Password changed.")
            } else {
                toast.error("Something went wrong.")
            }
        }
        catch( err ) {
            
        }

    }

    return (
        <section className="w-full">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="flex flex-col gap-5 mb-24">
                <div className="bg-white p-5 rounded-md border">
                    <div className="mb-3">
                        <h1 className="font-semibold md:text-lg">Change Password</h1>
                        <p className="text-gray-400 text-xs md:text-sm">Here to update their existing password for improved account security.</p>
                    </div>
                    <p className="font-semibold text-sm my-1">Current Password <span className="text-red-400">*</span></p>
                    <TextField
                        type='password'
                        className="w-full"
                        id="outlined-size-small"
                        size="small"
                        required
                        onChange={(e) => checkValidPassword(e.target.value)}
                    />
                    {pass ? validPassword ? <p className="text-green-500 text-xs md:text-sm">Password Varified</p> : <p className="text-red-500 text-xs md:text-sm">Password Invalid</p> : null}
                    
                    {
                    validPassword ? 
                    <form action={handleChangePasswordForm} className="py-3">
                        <div className="flex flex-col md:flex-row md:justify-between gap-5">
                            <div className="w-full">
                                <p className="font-semibold text-sm my-1">New Password <span className="text-red-400">*</span></p>
                                <TextField
                                    type='password'
                                    fullWidth
                                    id="outlined-size-small"
                                    size="small"
                                    name="newpass"
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <p className="font-semibold text-sm my-1">Confirm New Password <span className="text-red-400">*</span></p>
                                <TextField
                                    type='password'
                                    fullWidth
                                    id="outlined-size-small"
                                    size="small"
                                    name="confirmpass"
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="px-4 py-3 mt-3 bg-indigo-700 rounded-md font-medium text-xs md:text-sm text-gray-50">
                            Save changes
                        </button>
                    </form>
                    :
                    null
                    }
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

export default Settings;