import { NextRequest, NextResponse } from "next/server";

const MBOALINK_API_BASE_URL =
  process.env.MBOALINK_API_BASE_URL || "http://localhost:13000/api/v1";

export async function GET(req: NextRequest) {
  try {
    const hotelId =
      req.nextUrl.searchParams.get("hotelId") ||
      process.env.MBOALINK_DEFAULT_HOTEL_ID ||
      "";
    const path = hotelId
      ? `/captive/hotel/${encodeURIComponent(hotelId)}`
      : "/captive/hotel";

    const res = await fetch(`${MBOALINK_API_BASE_URL}${path}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    const payload = await res.json().catch(() => null);

    if (!res.ok || !payload?.ok) {
      return NextResponse.json(
        { success: false, message: payload?.error?.message || "Hôtel indisponible." },
        { status: res.status || 404 }
      );
    }

    return NextResponse.json({ success: true, hotel: payload.data });
  } catch (err) {
    console.error("[MBOALINK CAPTIVE HOTEL ERROR]", err);
    return NextResponse.json(
      { success: false, message: "Impossible de charger les informations de l'hôtel." },
      { status: 503 }
    );
  }
}
