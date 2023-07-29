import db from "@/app/api/server";
import { NextRequest, NextResponse } from "next/server";

//Connect to collection
const users = db.collection('users')

export async function GET(request: Request) {
    const {email} = await request.json();
    console.log(email);
    // const userExist = await users.findOne({ email: searchParam })

    return NextResponse.json(email, {
        status: 200
    })
}

export async function POST(request: Request) {
    const { email, name, image } = await request.json();

    const userExist = await users.findOne({ email });

    if (!userExist) {
        const resp = await users.insertOne({
            email,
            name,
            image
        });

        return NextResponse.json({ resp }, {
            status: 201,
        })
    }

    return NextResponse.json({ userExist }, {
        status: 200
    })
}