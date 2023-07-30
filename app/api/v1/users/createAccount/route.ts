import db from "@/app/api/server";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

//Connect to collection
const users = db.collection('users')

//Sign Up
export async function POST(req: Request) {
    const { firstname, lastname, email, password } = await req.json();
    const fullName = `${firstname} ${lastname}`;
    const hash = await bcrypt.hash(password, 10);

    const userExist = await users.findOne({ email });

    if (!userExist) {
        const resp = await users.insertOne({
            fullName,
            email,
            password: hash,
        });

        NextResponse.redirect(req.url)
        return NextResponse.json({ resp }, {
            status: 201,
        })
    }
    else {
        return NextResponse.json({msg: "User Exists"}, {
            status:200
        })
    }
}