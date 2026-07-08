import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

    const body = await request.text();

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/login`,
        {
            method: "POST",
            body,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );

    const res = new NextResponse(await response.text(), {
        status: response.status,
    });

    const cookie = response.headers.get("set-cookie");

    if (cookie) {
        res.headers.set("set-cookie", cookie);
    }

    return res;
}