import "./topbar.css";

export default function Topbar({ active = "Logins" }) {
  const items = ["Logins", "Dashboard", "Hotel Manager", "Device Manager"];

  return (
    <header className="topbar">
      <div className="topbarInner">
        <div className="topbarLeft">
          <div className="brand">
            <img className="brandLogo" src="/mboalink.jpg" alt="MboaLink logo" />
            <div className="brandName">
              Mboa<span>Link</span>
            </div>
          </div>

          <nav className="mainNav" aria-label="Main menu">
            {items.map((label) => (
              <a
                key={label}
                href="#"
                className={`mainNavLink ${label === active ? "isActive" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="topbarRight">
          <button className="applyBtn" type="button">
            <span className="applyIcon" aria-hidden="true">⟳</span>
            Apply Changes
          </button>
        </div>
      </div>
    </header>
  );
}
