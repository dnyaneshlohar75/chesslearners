import db from "@/app/api/server";
import { NextResponse } from "next/server";
import * as bcrypt from 'bcrypt'

//Connect to collection
const users = db.collection('users')

export async function POST(req: Request) {
    const { email, password } = await req.json();
    console.log(email, password)
    const findUser = await users.findOne({email})
    console.log(findUser)
    
    if(findUser && await bcrypt.compare(password, findUser.password)) {
        
        return NextResponse.json(findUser, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    else {
        return NextResponse.json({msg: "User Not Found", acknowledge: false}, {
            status: 404,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}