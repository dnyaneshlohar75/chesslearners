import send from "../../mailer";
import db from "../../server";

const otpCollection = db.collection('otp');
export async function sendOTP(userEmailAddress:any) {
    const otpField = Math.floor(Math.random() * (999999 - 100000 + 999999) + 100000);

    const sendMailResponse = send(userEmailAddress, "Your One Time Password For Recover Password", otpField.toString());

    const insertOtp = await otpCollection.insertOne({
        userEmail: userEmailAddress,
        insertAt: new Date().getTime,
        otp: otpField,
        isValid: true
    })
    
    console.log(insertOtp.acknowledged);

    return {sendMailResponse, isSend: true};
}