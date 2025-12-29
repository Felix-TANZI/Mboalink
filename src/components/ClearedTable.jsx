import { useMemo, useState } from "react";
import "./table.css";

const seed = [
  {
    ipmac: "4E:30:1A:B4:E9:4E",
    iface: "None selected",
    expires: "Wed, 31 Dec 2025 9:00 AM WAT",
    cap: "3096 / 3096",
    by: "Martin Eteme",
    details: "Admin Machine: GMPI",
  },
  {
    ipmac: "1E:80:80:1E:1F:30",
    iface: "None selected",
    expires: "Wed, 31 Dec 2025 1:00 PM WAT",
    cap: "8192 / 8192",
    by: "Ramses Fouda",
    details: "Admin Machine: IMAC-2-2",
  },
  {
    ipmac: "EE:0A:F0:A8:E7:BD",
    iface: "None selected",
    expires: "Wed, 31 Dec 2025 1:00 PM WAT",
    cap: "1500 / 1500",
    by: "Francis Obono",
    details: "Room 613",
  },
];

export default function ClearedTable() {
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return seed;
    return seed.filter((r) =>
      Object.values(r).some((v) => String(v).toLowerCase().includes(query))
    );
  }, [q]);

  return (
    <div className="tableCard" aria-label="Cleared addresses list">
      <div className="tableHead">
        <div className="tableHeadLeft">Cleared Addresses</div>
        <div className="tableHeadRight">
          <input
            className="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search IP/MAC, issued by, details..."
          />
          <button className="btn" type="button">Export</button>
        </div>
      </div>

      <div className="tableScroll">
        <table>
          <thead>
            <tr>
              <th style={{ width: 40 }}>
                <input type="checkbox" />
              </th>
              <th>IP/Mac</th>
              <th>Interface</th>
              <th>Expires</th>
              <th>Cap (Down/Up)</th>
              <th>Issued By</th>
              <th>Details</th>
              <th style={{ width: 120 }}>Options</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.ipmac}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{r.ipmac}</td>
                <td>{r.iface}</td>
                <td>{r.expires}</td>
                <td>{r.cap}</td>
                <td>{r.by}</td>
                <td>{r.details}</td>
                <td className="options">
                  <a href="#">Remove</a>
                  <a href="#">Modify</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
