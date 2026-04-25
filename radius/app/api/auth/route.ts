import { NextRequest, NextResponse } from "next/server";

const MBOALINK_API_BASE_URL =
  process.env.MBOALINK_API_BASE_URL || "http://localhost:13000/api/v1";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const code = String(body.numeroChambre || body.roomNumber || body.code || body.identifiantClient || "")
      .trim()
      .toUpperCase();

    if (!code) {
      return NextResponse.json(
        { success: false, message: "Code Wi-Fi requis." },
        { status: 400 }
      );
    }

    const res = await fetch(`${MBOALINK_API_BASE_URL}/captive/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        code,
        ipAddress:
          req.headers.get("x-forwarded-for") ??
          req.headers.get("x-real-ip") ??
          undefined,
      }),
    });

    const payload = await res.json().catch(() => null);

    if (!res.ok || !payload?.ok) {
      return NextResponse.json(
        {
          success: false,
          message:
            payload?.error?.message ||
            "Code Wi-Fi invalide, expiré ou révoqué.",
        },
        { status: res.status || 401 }
      );
    }

    const data = payload.data;
    return NextResponse.json({
      success: true,
      prenom: data.clientName || "Client",
      nomFamille: "",
      numeroChambre: data.room?.name || data.room?.type || "",
      hotelName: data.hotel?.name || "MboaLink",
      code: data.code,
    });
  } catch (err) {
    console.error("[MBOALINK CAPTIVE AUTH ERROR]", err);
    return NextResponse.json(
      { success: false, message: "Service d'authentification indisponible. Réessayez." },
      { status: 503 }
    );
  }
}
