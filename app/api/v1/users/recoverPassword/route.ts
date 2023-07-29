import { NextResponse } from "next/server";
import { sendOTP } from "../sendOtpForRecoverPassword"

export async function POST(req:Request) {
    const body = await req.json();

    const {sendMailResponse, isSend} = await sendOTP(body.email);

    if(isSend) {
        return NextResponse.json(sendMailResponse)
    }
}