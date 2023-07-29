import db from "@/app/api/server";
import { NextRequest, NextResponse } from "next/server";

//Connect to collection
const users = db.collection('users')

export async function GET(request: NextRequest) {
    const email = request.nextUrl.searchParams.get('email') as string;
    try {
        const userExist = await users.findOne({ email })

        return NextResponse.json(userExist, {
            status: 200
        })
    }
    catch(err) {
        return NextResponse.json({msg: err})
    }
}