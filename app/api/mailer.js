const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service: "Gmail",
    // port: 465,
    auth: {
        user: process.env.GOOGLE_EMAIL_ID,
        pass: process.env.GOOGLE_EMAIL_SECRET
    }
});

async function send(userEmailAddress, subject, text) {
    const info = await transporter.sendMail({
        // send mail with defined transport object
        from: '"Chess Learners Academy" <dnalohar@gmail.com>', // sender address
        to: userEmailAddress, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
    });
    return info;
}

export default send;