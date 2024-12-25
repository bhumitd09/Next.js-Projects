import prisma from "@/lib/db"
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const urls = await prisma.uRL.findMany({
            orderBy: {createdAt: "desc"},
            take: 5 //change this value show how many can be viewed on the page//
            });
            return NextResponse.json(urls)
    }catch(error) {
        console.error("Error Fetching The URLS", error);
        return NextResponse.json ({error: " Internal Server Error FUCK!!!!! :( "}, {status: 500 })
    }
}