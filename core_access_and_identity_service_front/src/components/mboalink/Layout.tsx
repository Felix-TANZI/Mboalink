import type { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import "./Layout.css";

type LayoutProps = {
  children: ReactNode;
  activePage?: string;
  activeSubPage?: string;
};

const pageRoutes: Record<string, string> = {
  dashboard: routes.public.dashboard,
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
};

export default function Layout({
  children,
  activePage = "LOGINS",
  activeSubPage = "WiFi Code", // ✅ ici c'est un LABEL
}: LayoutProps) {
  const navigate = useNavigate();
  const mainPages = ["LOGINS", "DASHBOARD", "HOTEL MANAGER", "DEVICE MANAGER"];

  const subPages = {
    LOGINS: [
      { label: "WiFi Code", page: "wifi-code" },
      { label: "Login by Adress", page: "login-by-address" }, // ✅ fix
      { label: "Statut Logins", page: "status-logins" },
      { label: "Manual Login", page: "manual-login" },
      { label: "Web Site Manager", page: "website-manager" },
      { label: "Config Code", page: "config-code" },
    ],
    DASHBOARD: [
      { label: "Overview", page: "dashboard" },
    ],
    "HOTEL MANAGER": [
      { label: "Hotels", page: "hotels" },
      { label: "Rooms", page: "rooms" },
      { label: "Config WiFi", page: "config-wifi" },
    ],
    "DEVICE MANAGER": [
      { label: "Devices", page: "devices" },
    ],
  };

  const defaultSubPages = {
    LOGINS: "wifi-code",
    "HOTEL MANAGER": "hotels",
    DASHBOARD: "dashboard",
    "DEVICE MANAGER": "devices",
  };

  const handleMainPageClick = (page: string) => {
    const defaultPage = defaultSubPages[page];
    if (defaultPage && pageRoutes[defaultPage]) {
      navigate(pageRoutes[defaultPage]);
    }
  };

  return (
    <div className="layout">
      <header className="mainHeader">
        <div className="headerInner">
          <div className="headerLeft">
            <div className="headerBrand">
              <svg
                width="32"
                height="32"
                viewBox="0 0 40 40"
                fill="none"
                aria-hidden="true"
              >
                <path d="M20 5L5 15V25L20 35L35 25V15L20 5Z" fill="#EDC707" />
                <circle cx="20" cy="20" r="8" fill="#052F5F" />
              </svg>
              <h1 className="headerBrandName">MboaLink</h1>
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
