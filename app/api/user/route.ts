import { NextResponse } from "next/server";

export function GET(req: NextResponse) {
    return NextResponse.json({
        email: "mayank@gmail.com",
        name: "Mayank"
    })
}

export async function POST(req: NextResponse) {
    const body = await req.json();

    return NextResponse.json({
        body
    })
}