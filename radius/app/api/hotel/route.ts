import { NextRequest, NextResponse } from "next/server";

const MBOALINK_API_BASE_URL =
  process.env.MBOALINK_API_BASE_URL || "http://localhost:13000/api/v1";
const MBOALINK_PUBLIC_ASSET_BASE_URL =
  process.env.MBOALINK_PUBLIC_ASSET_BASE_URL ||
  MBOALINK_API_BASE_URL.replace(/\/api\/v\d+\/?$/, "");

function normalizeAssetUrl(url?: string) {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  const base = MBOALINK_PUBLIC_ASSET_BASE_URL.replace(/\/$/, "");
  const path = url.startsWith("/") ? url : `/${url}`;
  return `${base}${path}`;
}

function normalizeHotelAssets(hotel: any) {
  return {
    ...hotel,
    photos: Array.isArray(hotel?.photos)
      ? hotel.photos.map((photo: any) => ({
          ...photo,
          url: normalizeAssetUrl(photo?.url),
        }))
      : hotel?.photos,
    wifiConfig: hotel?.wifiConfig
      ? {
          ...hotel.wifiConfig,
          captivePortal: {
            ...hotel.wifiConfig.captivePortal,
            logo: normalizeAssetUrl(hotel.wifiConfig.captivePortal?.logo),
          },
        }
      : hotel?.wifiConfig,
  };
}

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

    return NextResponse.json({ success: true, hotel: normalizeHotelAssets(payload.data) });
  } catch (err) {
    console.error("[MBOALINK CAPTIVE HOTEL ERROR]", err);
    return NextResponse.json(
      { success: false, message: "Impossible de charger les informations de l'hôtel." },
      { status: 503 }
    );
  }
}
