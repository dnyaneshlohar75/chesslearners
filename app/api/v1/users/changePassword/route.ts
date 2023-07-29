import db from "@/app/api/server";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

let users = db.collection("users");
let userPasswordFromDB: any;

export async function POST(request: Request) {
    let pass = await request.json();
    const curr = pass.password;

    userPasswordFromDB = await users.findOne({ 'password': curr });

    if (!userPasswordFromDB) {
        return NextResponse.json({ acknowledge: false });
    }
    console.log(userPasswordFromDB)
    return NextResponse.json({ acknowledge: true });
}

export async function PATCH(request: Request) {
    let pass = await request.json();
    const curr = pass.password;
    let updateUserNewPassword;

    try {
        const userIdToUpdate = pass.userId;
        console.log(userIdToUpdate)

        updateUserNewPassword = (await users.updateOne(
            { _id: new ObjectId(userIdToUpdate) },
            { $set: { password: curr } }
        )).acknowledged;

        return NextResponse.json({ updateUserNewPassword }, {
            status: 201
        });

    } catch (err) {
        console.error('Error updating password:', err);
        return NextResponse.json({ error: 'Failed to update password' }, {
            status: 500
        });
    }
}