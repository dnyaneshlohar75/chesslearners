import db from "@/app/api/server";
import { NextResponse } from "next/server";

const otp = db.collection('otp');

export async function POST(req:Request) {
    const body = await req.json();
    const userMail = body.mail;
    const userInputOtp = parseInt(body.userOtp);

    const findOtp = await otp.findOne({ userEmail: userMail });

    console.log(findOtp?.otp)
    if(findOtp?.isValid && findOtp?.otp === userInputOtp) {
        return NextResponse.json({isVerified: true});
    }

    return NextResponse.json({isVerified: false});
}