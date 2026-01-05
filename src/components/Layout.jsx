import "./Layout.css";

export default function Layout({
  children,
  activePage = "LOGINS",
  activeSubPage = "WiFi Code", // ✅ ici c'est un LABEL
  onNavigate,
}) {
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
    DASHBOARD: [],
    "HOTEL MANAGER": [
      { label: "Hotels", page: "hotels" },
      { label: "Rooms", page: "rooms" },
      { label: "Config WiFi", page: "config-wifi" },
      { label: "WiFi Policies", page: "wifi-policies" },
    ],
    "DEVICE MANAGER": [],
  };

  const defaultSubPages = {
    LOGINS: "wifi-code",
    "HOTEL MANAGER": "hotels",
    DASHBOARD: "dashboard",
    "DEVICE MANAGER": "device-manager",
  };

  const handleMainPageClick = (e, page) => {
    e.preventDefault();
    const defaultPage = defaultSubPages[page];
    if (defaultPage && onNavigate) {
      onNavigate(defaultPage); // envoie une "page" (slug)
    }
  };

  const handleSubPageClick = (e, page) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page); // envoie une "page" (slug)
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
                <a
                  key={page}
                  href="#"
                  className={`mainNavLink ${page === activePage ? "active" : ""}`}
                  onClick={(e) => handleMainPageClick(e, page)}
                >
                  {page}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {subPages[activePage]?.length > 0 && (
        <nav className="subNav" aria-label="Sub navigation">
          <div className="subNavInner">
            {subPages[activePage].map((item) => (
              <a
                key={item.page}
                href="#"
                className={`subNavLink ${item.label === activeSubPage ? "active" : ""}`}
                onClick={(e) => handleSubPageClick(e, item.page)}
              >
                {item.label}
              </a>
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
