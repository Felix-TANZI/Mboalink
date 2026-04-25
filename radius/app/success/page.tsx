"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const params = useSearchParams();
  const router = useRouter();
  const prenom = params.get("prenom") ?? "Client";
  const chambre = params.get("chambre") ?? "";

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{
        backgroundImage: "linear-gradient(135deg, #0D2240 0%, #315C7D 55%, #C8963E 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay sombre */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(10, 20, 45, 0.62)" }}
      />

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        {/* Titre bienvenue au-dessus de la carte */}
        <div className="text-center mb-4">
          <p
            className="text-white text-lg font-light tracking-widest"
            style={{ fontFamily: "Georgia, serif", textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
          >
            Bienvenue à
          </p>
          <h1
            className="text-white text-3xl font-bold"
            style={{
              fontFamily: "Georgia, serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.8)",
              lineHeight: 1.2,
            }}
          >
            Hilton Brazzaville Les Tours Jumelles Hotel &amp; Résidences
          </h1>
        </div>

        {/* Carte blanche */}
        <div
          className="bg-white w-full max-w-sm rounded-sm shadow-2xl overflow-hidden"
          style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
        >
          {/* Sous-titre en haut de la carte */}
          <div className="px-8 pt-7 pb-2 text-center border-b border-gray-100">
            <p className="text-gray-500 text-xs uppercase tracking-widest font-medium">
              Connexion Wi-Fi réussie
            </p>
            <h2
              className="text-gray-900 text-2xl font-black uppercase tracking-wider mt-1"
              style={{ fontFamily: "Georgia, serif", letterSpacing: "0.08em" }}
            >
              CONNEXION RÉUSSIE !
            </h2>
          </div>

          {/* Corps de la carte */}
          <div className="px-8 py-6 flex flex-col items-center gap-4">
            {/* Icône succès */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#F0FDF4" }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16A34A"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>

            {/* Message de bienvenue */}
            <div className="text-center">
              <p className="text-gray-700 text-base">
                Bienvenue,{" "}
                <span className="font-bold text-gray-900">{prenom}</span>
              </p>
              {chambre && (
                <p className="text-gray-400 text-sm mt-0.5">
                  Chambre{" "}
                  <span className="font-semibold text-gray-600">{chambre}</span>
                </p>
              )}
            </div>

            {/* Info Wi-Fi */}
            <div
              className="w-full rounded px-4 py-3 text-center"
              style={{ backgroundColor: "#F8F4EE" }}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C8963E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                  <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                  <line x1="12" y1="20" x2="12.01" y2="20" />
                </svg>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "#C8963E" }}
                >
                  Wi-Fi Hilton Guest
                </span>
              </div>
              <p className="text-gray-600 text-xs">
                Vous êtes maintenant connecté au réseau Wi-Fi de l'hôtel.
                Profitez de votre navigation !
              </p>
            </div>

            {/* Bouton Se déconnecter — style identique au bouton "Se connecter" de la page login */}
            <button
              onClick={() => router.push("/")}
              className="w-full py-3 rounded text-white font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all duration-200"
              style={{
                backgroundColor: "#0D2240",
                letterSpacing: "0.18em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#1a3a6b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#0D2240";
              }}
            >
              {/* Icône Wi-Fi */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                <line x1="12" y1="20" x2="12.01" y2="20" />
              </svg>
              Se déconnecter
            </button>
          </div>

          {/* Footer carte */}
          <div className="px-8 pb-5 text-center">
            <p className="text-xs text-gray-300">
              © {new Date().getFullYear()} Hilton Brazzaville Les Tours Jumelles
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense>
      <SuccessContent />
    </Suspense>
  );
}
