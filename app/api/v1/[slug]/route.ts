import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: { slug: string } }) {
    const password = "Pass@123"
    let currentPass = params.slug;

    console.log(currentPass);
    if(password === currentPass) {
        console.log("Password Match")
        return NextResponse.json({acknowledge: true})
    }
    return NextResponse.json({acknowledge: false})
}