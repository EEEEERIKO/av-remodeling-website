import { NextRequest, NextResponse } from "next/server";

function getBackendUrl() {
  const url = process.env.NEXT_PUBLIC_API_URL;

  if (!url) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured.");
  }

  return `${url}/api/contact`;
}

export async function GET(request: NextRequest) {
  try {
    const backendUrl = getBackendUrl();
    const url = new URL(backendUrl);
    const { searchParams } = new URL(request.url);

    const page = Number(searchParams.get("page") || "1");
    const limit = Number(searchParams.get("limit") || "10");

    if (Number.isFinite(page) && page > 0) {
      url.searchParams.set("page", String(page));
    }
    if (Number.isFinite(limit) && limit > 0) {
      url.searchParams.set("limit", String(limit));
    }

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    const payload = await response.json().catch(() => null);
    const contacts = Array.isArray(payload?.data) ? payload.data : [];
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = contacts.slice(start, end);

    return NextResponse.json({
      success: true,
      data: paginated,
      message: payload?.message || "Contact requests fetched successfully.",
      total: contacts.length,
      page,
      limit,
      hasMore: end < contacts.length,
    });
  } catch (error) {
    console.error("Contact fetch proxy error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to fetch contact requests." },
      { status: 502 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const backendUrl = getBackendUrl();

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
