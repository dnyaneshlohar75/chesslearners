import db from "@/app/api/server";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

//Connect to collection
const tournaments = db.collection('tournaments')

export async function GET(request: NextRequest) {
    //Get All Users
    const getAllTournaments = await tournaments.find().toArray();
    //Send Response to User
    return NextResponse.json({ getAllTournaments, acknoweledge: true })
}

export async function POST(req: Request) {
    const body = await req.json();

    try {
        const resp = (await tournaments.insertOne(body)).acknowledged;

        return NextResponse.json({ acknowledge: resp }, {
            status: 201
        })
    }
    catch (err) {
        return NextResponse.json({ acknoweldge: false, data: 'Something went Wrong' }, { status: 500 })
    }
}

export async function PATCH(req: NextRequest) {
    const body = await req.json();
    const updateTournamentId = req.nextUrl.searchParams.get("tid") || '';
    let resp;

    try {
        // Find Document
        const document = tournaments.findOne({
            '_id': new ObjectId(updateTournamentId),
        });

        const resp = (await tournaments.updateOne(document, { "$set": body })).acknowledged;
        return NextResponse.json({ acknoweldge: resp }, {
            status: 201
        })
    }
    catch (err) {
        return NextResponse.json({ acknoweldge: resp }, {
            status: 500
        })
    }
}

export async function DELETE(req: NextRequest) {
    const deleteTournamentId = req.nextUrl.searchParams.get("deleteTournamentId");
    try {
        // Find Document
        const document = tournaments.findOne({ tId: deleteTournamentId })
        //Delete Query
        const resp = (await tournaments.deleteOne(document)).acknowledged
        return NextResponse.json({ acknowledge: resp }, {
            status: 201
        })
    }
    catch (err) {
        return NextResponse.json({ acknowledge: false, data: 'Something went Wrong' }, {
            status: 500
        })
    }
}