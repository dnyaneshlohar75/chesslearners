"use client"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast';
const notify = () => toast('Here is your toast.');

const handleSubmit = async (formData:FormData) => {

    const firstName = formData.get("contactFormFirstName") || '';
    const lastName = formData.get("contactFormLastName");
    const emailId = formData.get("contactFormEmailId");``
    const mobileNum = formData.get("contactFormMobileNumber");
    const subject = formData.get("contactFormSubject");
    const message = formData.get("contactFormMessage");

    try {
        const sendDataAPI = await fetch("/api/v1/contact", {
            body: JSON.stringify({
                firstName, lastName, emailId, mobileNum, subject, message,
            }),
            method: "POST",
            headers: {
                'Content-Type': 'multipart/formdata',
            },
            cache: 'no-store'
        })

        const resp = await sendDataAPI.json();
        console.log(resp.successMessage)
        toast.success("Message sent successfully.");
    }
    catch (error) {
        toast.error("Message sending failed, try again.");
    }
}

const contactForm = () => {
    return (
        <div>
            <Toaster />
            <form action={handleSubmit} className='flex flex-col gap-4 relative top-0'>
                <div className='grid grid-cols-2 gap-5'>
                    <TextField id="outlined-basic" name="contactFormFirstName" label="First Name" variant="outlined" size='small' required />
                    <TextField id="outlined-basic" name="contactFormLastName" label="Last Name" variant="outlined" size='small' required />
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <TextField id="outlined-basic" name="contactFormEmailId" label="Email" variant="outlined" size='small' required />
                    <TextField id="outlined-basic" name="contactFormMobileNumber" label="Mobile Number" variant="outlined" size='small' />
                </div>
                <TextField id="outlined-basic" name="contactFormSubject" label="Subject" variant="outlined" className='w-full' size='small' required />
                <TextField id="outlined-basic" name="contactFormMessage" label="Message" variant="outlined" className='w-full' size='small' required multiline rows={3} />
                <div>
                    <button
                        type="submit"
                        className="font-semibold text-sm px-7 py-3 rounded-md hover:bg-indigo-50 hover:text-indigo-500 bg-indigo-500 text-white"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    )
}

export default contactForm;