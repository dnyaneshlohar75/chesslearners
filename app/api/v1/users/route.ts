import db from "@/app/api/server";
import { createHash } from "crypto";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'
//Connect to collection
const users = db.collection('users')
export async function GET(request: NextRequest) {
    try {
        const userId = request.nextUrl.searchParams.get('userid') || '';
        if(userId == null || !userId) {
            return NextResponse.json({msg: "No userId pass"})
        }

        //Get All Users
        const getAllUserDetails = await users.findOne({
            '_id' : new ObjectId(userId)
        });
        
        //Send Response to User
        return NextResponse.json(getAllUserDetails);
    }
    catch(err) {
        return NextResponse.json({status: 500, msg: "Internal Server Error"}, {
            status: 500
        })
    }
}

export async function POST(request: Request) {
    const body = await request.json();
    const username = body.username;
    const password = body.password;

    console.log(username, password);

    redirect("/(login)/profile");
}