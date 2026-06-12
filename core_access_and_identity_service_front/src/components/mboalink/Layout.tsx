import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { authService } from "@/services/auth/authService";
import mboalinkLogo from "@/assets/images/mboalink-logo-navbar.png";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
  activePage?: string;
  activeSubPage?: string;
};

const pageRoutes: Record<string, string> = {
  dashboard: routes.public.dashboard,
  "network-map": routes.public.networkMap,
  "wifi-code": routes.public.wifiCode,
  "login-by-address": routes.public.loginByAddress,
  "status-logins": routes.public.statusLogins,
  "manual-login": routes.public.manualLogin,
  "website-manager": routes.public.websitesManager,
  "config-code": routes.public.configCode,
  hotels: routes.public.hotels,
  rooms: routes.public.rooms,
  "config-wifi": routes.public.configWifi,
  devices: routes.public.devices,
  users: routes.public.users,
};

export default function Layout({
  children,
  activePage = "LOGINS",
  activeSubPage = "WiFi Code",
}: LayoutProps) {
  const navigate = useNavigate();

  const user = authService.getStoredUser();
  const displayName = user?.name || user?.email || "Utilisateur";
  const avatarLetter = displayName.charAt(0).toUpperCase();
  const isReceptionist = user?.role === "RECEPTIONIST";
  const isHotelIt = user?.role === "HOTEL_IT";

  const mainPages = isReceptionist
    ? ["LOGINS"]
    : isHotelIt
      ? ["DASHBOARD", "LOGINS", "HOTEL MANAGER", "DEVICE MANAGER"]
      : user?.role === "ADMIN"
        ? ["LOGINS", "DASHBOARD", "HOTEL MANAGER", "DEVICE MANAGER", "ADMIN"]
        : ["LOGINS", "DASHBOARD", "HOTEL MANAGER", "DEVICE MANAGER"];

  const subPages: Record<string, { label: string; page: string }[]> = {
    LOGINS: isReceptionist
      ? [{ label: "Manual Login", page: "manual-login" }]
      : isHotelIt
        ? [
            { label: "WiFi Code", page: "wifi-code" },
            { label: "Statut Logins", page: "status-logins" },
            { label: "Web Site Manager", page: "website-manager" },
          ]
      : [
          { label: "WiFi Code", page: "wifi-code" },
          { label: "Login by Adress", page: "login-by-address" },
          { label: "Statut Logins", page: "status-logins" },
          { label: "Manual Login", page: "manual-login" },
          { label: "Web Site Manager", page: "website-manager" },
          { label: "Config Code", page: "config-code" },
        ],
    DASHBOARD: [
      { label: "Overview", page: "dashboard" },
      { label: "Network Map", page: "network-map" },
    ],
    "HOTEL MANAGER": isHotelIt
      ? [
          { label: "Rooms", page: "rooms" },
          { label: "Config WiFi", page: "config-wifi" },
        ]
      : [
          { label: "Hotels", page: "hotels" },
          { label: "Rooms", page: "rooms" },
          { label: "Config WiFi", page: "config-wifi" },
        ],
    "DEVICE MANAGER": [{ label: "Devices", page: "devices" }],
    ADMIN: [{ label: "Users", page: "users" }],
  };

  const defaultSubPages: Record<string, string> = {
    LOGINS: isReceptionist ? "manual-login" : "wifi-code",
    "HOTEL MANAGER": isHotelIt ? "rooms" : "hotels",
    DASHBOARD: "dashboard",
    "DEVICE MANAGER": "devices",
    ADMIN: "users",
  };

  const handleMainPageClick = (page: string) => {
    const defaultPage = defaultSubPages[page];
    if (defaultPage && pageRoutes[defaultPage]) {
      navigate(pageRoutes[defaultPage]);
    }
  };

  const handleLogout = async () => {
    await authService.logout();
    navigate(routes.public.login);
  };

  return (
    <div className="layout">
      <header className="mainHeader">
        <div className="headerInner">
          {/* Gauche : logo + nav */}
          <div className="headerLeft">
            <div className="headerBrand">
              <img
                src={mboalinkLogo}
                alt="MboaLink"
                className="headerLogo"
              />
            </div>

            <nav className="mainNav" aria-label="Main navigation">
              {mainPages.map((page) => (
                <button
                  key={page}
                  type="button"
                  className={`mainNavLink ${page === activePage ? "active" : ""}`}
                  onClick={() => handleMainPageClick(page)}
                  aria-disabled={!defaultSubPages[page]}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>

          {/* Droite : utilisateur + déconnexion */}
          <div className="headerRight">
            <div className="userInfo">
              <span className="userAvatar">{avatarLetter}</span>
              <span className="userName">{displayName}</span>
            </div>
            <button className="logoutBtn" onClick={handleLogout} type="button">
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      {subPages[activePage]?.length > 0 && (
        <nav className="subNav" aria-label="Sub navigation">
          <div className="subNavInner">
            {subPages[activePage].map((item) => (
              <Link
                key={item.page}
                to={pageRoutes[item.page]}
                className={`subNavLink ${item.label === activeSubPage ? "active" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}

      <main className="mainContent">{children}</main>

      <footer className="mainFooter">
        <div className="footerInner">
          <div className="footerLinks">
            <a href="#">Terms of Service</a>
            <span className="separator">|</span>
            <a href="#">Privacy Policy</a>
            <span className="separator">|</span>
            <a href="#">Help Desk</a>
          </div>
          <p className="footerCopy">© 2025 MboaLink. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
