import db from "@/app/api/server";
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcryptjs')

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