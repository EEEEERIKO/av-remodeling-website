import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`,
        {
            headers: {
                Cookie: request.headers.get("cookie") ?? "",
            },
        }
    );

    return new NextResponse(await response.text(), {
        status: response.status,
        headers: {
            "content-type":
                response.headers.get("content-type") ??
                "application/json",
        },
    });
}