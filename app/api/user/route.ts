import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET(req: NextResponse) {

    return NextResponse.json({
        email: "mayank@gmail.com",
        name: "Mayank"
    })
}

export async function POST(req: NextResponse) {
    const body = await req.json();
    try{
        await client.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        return NextResponse.json({
            body
        })
    } catch(e) {
        NextResponse.json({
            message: "Error while Sign up",
        }, {
            status: 411
        })
    }
}