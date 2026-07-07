import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const backendUrl = process.env.CONTACT_API_URL || "http://127.0.0.1:3000/api/contact";

    const response = await fetch(backendUrl, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    const responseText = await response.text();

    return new NextResponse(responseText, {
      status: response.status,
      headers: {
        "content-type": response.headers.get("content-type") || "application/json",
      },
    });
  } catch (error) {
    console.error("Contact proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to submit contact request." },
      { status: 502 }
    );
  }
}
