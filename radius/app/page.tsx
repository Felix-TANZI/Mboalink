"use client";

import { useEffect, useState, FormEvent, CSSProperties, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type CaptiveHotel = {
  id: string;
  name: string;
  city?: string;
  country?: string;
  address?: string;
  phone?: string;
  website?: string;
  description?: string;
  amenities?: string[];
  photos?: Array<{ url: string; isMain?: boolean; name?: string }>;
  wifiConfig?: {
    ssid?: string;
    captivePortal?: {
      welcomeMessage?: string;
    };
  };
};

function LoginContent() {
  const router = useRouter();
  const params = useSearchParams();
  const hotelId = params.get("hotelId") || "";
  const [identifiantClient, setIdentifiantClient] = useState("");
  const [numeroChambre, setNumeroChambre] = useState("");
  const [accessCode, setAccessCode] = useState("");
  const [hotel, setHotel] = useState<CaptiveHotel | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const suffix = hotelId ? `?hotelId=${encodeURIComponent(hotelId)}` : "";
    fetch(`/api/hotel${suffix}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setHotel(data.hotel);
      })
      .catch(() => undefined);
  }, [hotelId]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!accessCode.trim() && (!identifiantClient.trim() || !numeroChambre.trim())) {
      setError("Veuillez saisir votre code Wi-Fi, code conférence, UUID ou votre nom avec votre numéro de chambre.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hotelId,
          code: accessCode.trim(),
          uuid: accessCode.trim(),
          identifiantClient: identifiantClient.trim(),
          numeroChambre: numeroChambre.trim(),
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push(
          `/success?prenom=${encodeURIComponent(data.prenom)}&chambre=${encodeURIComponent(data.numeroChambre)}&hotel=${encodeURIComponent(data.hotelName)}`
        );
      } else {
        setError(data.message || "Identifiants incorrects. Veuillez réessayer.");
      }
    } catch {
      setError("Erreur de connexion. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  }

  const hotelName = hotel?.name || "MboaLink";
  const mainPhoto = hotel?.photos?.find((photo) => photo.isMain)?.url || hotel?.photos?.[0]?.url;
  const ssid = hotel?.wifiConfig?.ssid || "MboaLink Guest";

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f5f5f5" }}>

      {/* ── HERO ── photo d'hôtel + titre superposé */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          backgroundImage: mainPhoto
            ? `linear-gradient(to bottom, rgba(10,20,45,0.30), rgba(10,20,45,0.78)), url("${mainPhoto}")`
            : "linear-gradient(135deg, #0D2240 0%, #315C7D 55%, #C8963E 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "340px",
        }}
      >
        {/* Overlay dégradé sombre */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,20,45,0.40) 0%, rgba(10,20,45,0.72) 100%)",
          }}
        />

        {/* Texte hero centré */}
        <div className="relative z-10 text-center px-6 py-16">
          <p
            className="text-white text-base font-light tracking-widest mb-2"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            Bienvenue à
          </p>
          <h1
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
              textShadow: "0 3px 16px rgba(0,0,0,0.8)",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            {hotelName}
          </h1>
          {(hotel?.city || hotel?.country) && (
            <p className="text-white text-sm mt-4 opacity-90">
              {[hotel.city, hotel.country].filter(Boolean).join(", ")}
            </p>
          )}
        </div>
      </div>

      {/* ── FORMULAIRE ── carte blanche centrée sous le hero */}
      <div
        className="flex-1 flex items-start justify-center px-4 py-10"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="w-full max-w-5xl grid gap-6 md:grid-cols-[1fr_380px] items-start">
          <section className="bg-white shadow-xl px-7 py-7" style={{ borderRadius: "4px" }}>
            <h2 className="text-gray-900 text-xl font-black uppercase" style={{ fontFamily: "Georgia, serif" }}>
              {hotel?.wifiConfig?.captivePortal?.welcomeMessage || `Bienvenue chez ${hotelName}`}
            </h2>
            {hotel?.description && (
              <p className="text-gray-600 text-sm mt-3 leading-6">{hotel.description}</p>
            )}
            <div className="grid sm:grid-cols-2 gap-3 mt-6 text-sm text-gray-600">
              {hotel?.address && <p><strong>Adresse:</strong> {hotel.address}</p>}
              {hotel?.phone && <p><strong>Téléphone:</strong> {hotel.phone}</p>}
              {hotel?.website && <p><strong>Site:</strong> {hotel.website}</p>}
              <p><strong>Wi-Fi:</strong> {ssid}</p>
            </div>
          </section>

          <div
            className="bg-white w-full shadow-xl"
            style={{ borderRadius: "4px" }}
          >
          {/* En-tête carte */}
          <div className="px-8 pt-8 pb-5 text-center border-b border-gray-100">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium mb-1 leading-relaxed">
              Entrez votre code Wi-Fi, code conférence, UUID, ou votre nom avec votre numéro de chambre
            </p>
            <h2
              className="text-gray-900 text-xl font-black uppercase mt-2"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "0.05em" }}
            >
              ACCÈS WI-FI CLIENT
            </h2>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <KeyIcon />
              </span>
              <input
                id="accessCode"
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Code Wi-Fi, code conférence ou UUID"
                autoComplete="off"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition text-sm"
                style={{ "--tw-ring-color": "#C8963E" } as CSSProperties}
                disabled={loading}
              />
            </div>

            <div className="text-center text-xs uppercase tracking-widest text-gray-400">ou</div>

            {/* Nom client */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <PersonIcon />
              </span>
              <input
                id="identifiantClient"
                type="text"
                value={identifiantClient}
                onChange={(e) => setIdentifiantClient(e.target.value)}
                placeholder="Nom du client"
                autoComplete="username"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition text-sm"
                style={{ "--tw-ring-color": "#C8963E" } as CSSProperties}
                disabled={loading}
              />
            </div>

            {/* Numéro de chambre */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <DoorIcon />
              </span>
              <input
                id="numeroChambre"
                type="text"
                value={numeroChambre}
                onChange={(e) => setNumeroChambre(e.target.value)}
                placeholder="Numéro de chambre"
                autoComplete="off"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition text-sm"
                style={{ "--tw-ring-color": "#C8963E" } as CSSProperties}
                disabled={loading}
              />
            </div>

            {/* Erreur */}
            {error && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded px-4 py-3 text-sm">
                <span className="mt-0.5 shrink-0">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Bouton Se connecter */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 uppercase"
              style={{ backgroundColor: "#0D2240", letterSpacing: "0.18em" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a3a6b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#0D2240";
              }}
            >
              {loading ? (
                <>
                  <SpinnerIcon />
                  Connexion en cours…
                </>
              ) : (
                <>
                  <WifiSmallIcon />
                  Se connecter
                </>
              )}
            </button>
          </form>

          {/* Footer carte */}
          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-gray-400">
              En vous connectant, vous acceptez les conditions d'utilisation du réseau Wi-Fi de l'hôtel.
            </p>
          </div>
        </div>
        </div>
      </div>

      {/* ── FOOTER PAGE ── */}
      <p className="text-center text-gray-400 text-xs pb-6 opacity-70">
        © {new Date().getFullYear()} {hotelName}
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function WifiSmallIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function DoorIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7.5" cy="15.5" r="5.5" />
      <path d="M12 12l8-8" />
      <path d="M17 4h3v3" />
    </svg>
  );
}

function SpinnerIcon() {
  return (
    <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}
