import "./subnav.css";

export default function Subnav({ active = "Login by Address" }) {
  const subItems = [
    "WiFi Code",
    "Login by Address",
    "Statut Logins",
    "Manual Login",
    "Web Site Manager",
    "Config Code",
  ];

  return (
    <nav className="subnav" aria-label="Logins sub menu">
      <div className="subnavInner">
        {subItems.map((label) => (
          <a
            key={label}
            href="#"
            className={`subnavLink ${label === active ? "isActive" : ""}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
