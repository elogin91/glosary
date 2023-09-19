import { NextRequest, NextResponse } from "next/server";
import Word from "@/models/Word"
import dbConnect from "@/lib/dbConnect";


export async function POST(req: NextRequest, res: NextResponse) {
    await dbConnect();

    //Adding data to BD
    const data = await req.json();
    const { id, title, tags, description } = data;

    const newData = {
        ...data,
        date: new Date(),
    };

    try {
        await Word.create(newData);
        return NextResponse.json(
            { message: "Message sent" },
            { status: 201, }
        );
    }
    catch (error) {
        return NextResponse.json(
            { message: "Error sending the message" },
            { status: 500, }
        );
    }

}

export async function GET(req: NextRequest, res: NextResponse) {
    await dbConnect();

    
        const words = await Word.find({})

        return NextResponse.json(
            words
        )
}
