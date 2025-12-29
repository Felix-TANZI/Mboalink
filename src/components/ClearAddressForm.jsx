import { useState } from "react";
import "./clearForm.css";

function IconBroom() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 3l7 7-9 9H5v-7l9-9zm0 2.5L7 12.5V17h4.5L18.5 10 14 5.5z"
      />
    </svg>
  );
}

function IconTrash() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6 7h12l-1 14H7L6 7zm3-3h6l1 2H8l1-2z"
      />
    </svg>
  );
}

export default function ClearAddressForm() {
  const [up, setUp] = useState(1500);
  const [down, setDown] = useState(1500);

  return (
    <div className="formCard">
      <div className="formHead">
        <span>Address and Device Information</span>
        <span className="hintBadge">Tip • Supports IP or MAC formats</span>
      </div>

      <div className="formGrid">
        {/* LEFT */}
        <div className="formCol">
          <div className="row">
            <div className="meta">
              <label>IP/MAC Address</label>
              <div className="help">Example MAC: 3D:F2:C0:A0:B3:4F</div>
            </div>
            <input type="text" placeholder="Enter IP or MAC address" />
          </div>

          <div className="row">
            <div className="meta">
              <label>Specify Network Interface</label>
              <div className="help">Required only for public IP clearing.</div>
            </div>
            <select defaultValue="Not Public IP">
              <option>Not Public IP</option>
              <option>Public IP – Interface A</option>
              <option>Public IP – Interface B</option>
            </select>
          </div>

          <div className="row">
            <div className="meta">
              <label>Cleared Until</label>
              <div className="help">Date and time until the address is cleared.</div>
            </div>
            <div className="inline">
              <input type="date" />
              <input type="time" defaultValue="16:00" />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="formCol">
          <div className="row">
            <div className="meta">
              <label>Upload Cap (Kb/s)</label>
              <div className="help">Set bandwidth limit for upload.</div>
            </div>
            <div className="sliderWrap">
              <input
                type="range"
                min="0"
                max="15000"
                value={up}
                onChange={(e) => setUp(Number(e.target.value))}
              />
              <div className="capValue">{up}</div>
            </div>
          </div>

          <div className="row">
            <div className="meta">
              <label>Download Cap (Kb/s)</label>
              <div className="help">Set bandwidth limit for download.</div>
            </div>
            <div className="sliderWrap">
              <input
                type="range"
                min="0"
                max="15000"
                value={down}
                onChange={(e) => setDown(Number(e.target.value))}
              />
              <div className="capValue">{down}</div>
            </div>
          </div>

          <div className="row">
            <div className="meta">
              <label>Connection Type / Reason</label>
              <div className="help">Optional classification.</div>
            </div>
            <select defaultValue="Admin Machine">
              <option>Admin Machine</option>
              <option>Guest Device</option>
              <option>Staff Device</option>
              <option>Other</option>
            </select>
          </div>

          <div className="row">
            <div className="meta">
              <label>Notes</label>
              <div className="help">Why are you clearing it? (case #, etc.)</div>
            </div>
            <textarea placeholder="Write a short note..." />
          </div>
        </div>
      </div>

      <div className="actions">
        <button className="btn btnPrimary" type="button">
          <IconBroom /> Clear
        </button>
        <button className="btn btnDanger" type="button">
          <IconTrash /> Remove Selected
        </button>
      </div>
    </div>
  );
}
