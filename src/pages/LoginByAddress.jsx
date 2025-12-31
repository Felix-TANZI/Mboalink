import { useState } from 'react'
import Layout from '../components/Layout'
import './LoginByAddress.css'

export default function LoginByAddress({ onNavigate }) {
  const [formData, setFormData] = useState({
    address: '',
    interface: 'Not Public IP',
    clearedDate: '',
    clearedTime: '16:00',
    uploadCap: 1500,
    downloadCap: 1500,
    connectionType: 'Admin Machine',
    notes: ''
  })

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      ipmac: '4E:30:1A:B4:E9:4E',
      interface: 'None selected',
      expires: 'Wed, 31 Dec 2025 9:00 AM WAT',
      cap: '3096 / 3096',
      issuedBy: 'Martin Eteme',
      details: 'Admin Machine: GMPI'
    },
    {
      id: 2,
      ipmac: '1E:80:80:1E:1F:30',
      interface: 'None selected',
      expires: 'Wed, 31 Dec 2025 1:00 PM WAT',
      cap: '8192 / 8192',
      issuedBy: 'Ramses Fouda',
      details: 'Admin Machine: IMAC-2-2'
    },
    {
      id: 3,
      ipmac: '1E:80:80:1E:1F:31',
      interface: 'None selected',
      expires: 'Wed, 31 Dec 2025 1:00 PM WAT',
      cap: '8192 / 8192',
      issuedBy: 'Ramses Fouda',
      details: 'Admin Machine: IMAC-3-3'
    },
    {
      id: 4,
      ipmac: '9C:A6:F6:C0:39:AF',
      interface: 'None selected',
      expires: 'Tue, 22 Jan 2030 8:00 PM WAT',
      cap: '15000 / 15000',
      issuedBy: 'Carlos Saïtilho',
      details: 'Admin Machine: OVCC CMYAOHIMAC002 local wireless'
    }
  ])

  const [selected, setSelected] = useState([])

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleClear = () => {
    console.log('Clearing address:', formData)
    // TODO: API call
  }

  const handleRemoveSelected = () => {
    console.log('Removing:', selected)
    // TODO: API call
  }

  const toggleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    )
  }

  const toggleSelectAll = () => {
    setSelected(prev =>
      prev.length === addresses.length ? [] : addresses.map(a => a.id)
    )
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Login by Adress" onNavigate={onNavigate}>
      <div className="loginByAddressPage">
        <div className="pageHeader">
          <h1 className="pageTitle">Clear IP/MAC Address</h1>
          <p className="pageSubtitle">
            If the IP you want to clear is a public IP, you must specify the network interface.
          </p>
        </div>

        <div className="clearForm">
          <div className="formSection">
            <h3 className="sectionTitle">Address and Device Information</h3>

            <div className="formGrid">
              <div className="formCol">
                <div className="formField">
                  <label>IP/MAC Address</label>
                  <p className="fieldHelp">
                    Must be formatted correctly as an IP address or MAC address. 
                    Example MAC Address: 3D:F2:C0:A0:B3:4F
                  </p>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Enter IP or MAC address"
                  />
                </div>

                <div className="formField">
                  <label>Specify Network Interface</label>
                  <select
                    value={formData.interface}
                    onChange={(e) => handleInputChange('interface', e.target.value)}
                  >
                    <option>Not Public IP</option>
                    <option>Public IP – Interface A</option>
                    <option>Public IP – Interface B</option>
                  </select>
                </div>

                <div className="formField">
                  <label>Cleared Until</label>
                  <div className="dateTimeGroup">
                    <input
                      type="date"
                      value={formData.clearedDate}
                      onChange={(e) => handleInputChange('clearedDate', e.target.value)}
                    />
                    <input
                      type="time"
                      value={formData.clearedTime}
                      onChange={(e) => handleInputChange('clearedTime', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="formCol">
                <div className="formField">
                  <label>Upload Cap</label>
                  <div className="capControl">
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="100"
                      value={formData.uploadCap}
                      onChange={(e) => handleInputChange('uploadCap', Number(e.target.value))}
                    />
                    <input
                      type="number"
                      value={formData.uploadCap}
                      onChange={(e) => handleInputChange('uploadCap', Number(e.target.value))}
                      className="capValue"
                    />
                  </div>
                </div>

                <div className="formField">
                  <label>Download Cap</label>
                  <div className="capControl">
                    <input
                      type="range"
                      min="0"
                      max="15000"
                      step="100"
                      value={formData.downloadCap}
                      onChange={(e) => handleInputChange('downloadCap', Number(e.target.value))}
                    />
                    <input
                      type="number"
                      value={formData.downloadCap}
                      onChange={(e) => handleInputChange('downloadCap', Number(e.target.value))}
                      className="capValue"
                    />
                  </div>
                </div>

                <div className="formField">
                  <label>Connection Type / Reason</label>
                  <select
                    value={formData.connectionType}
                    onChange={(e) => handleInputChange('connectionType', e.target.value)}
                  >
                    <option>Admin Machine</option>
                    <option>Guest Device</option>
                    <option>Staff Device</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="formField">
                  <label>Notes</label>
                  <p className="fieldHelp">Why are you clearing it? Case #, etc.</p>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Enter notes..."
                    rows="3"
                  />
                </div>
              </div>
            </div>

            <div className="formActions">
              <button className="btn btnPrimary" onClick={handleClear}>
                Clear
              </button>
              <button className="btn btnDanger" onClick={handleRemoveSelected}>
                Remove Selected
              </button>
            </div>
          </div>
        </div>

        <div className="addressTable">
          <div className="tableHeader">
            <h3 className="tableTitle">Cleared Addresses</h3>
          </div>

          <div className="tableWrapper">
            <table>
              <thead>
                <tr>
                  <th style={{ width: '40px' }}>
                    <input
                      type="checkbox"
                      checked={selected.length === addresses.length}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th>IP/Mac</th>
                  <th>Interface</th>
                  <th>Expires</th>
                  <th>Cap (Down/Up)</th>
                  <th>Issued By</th>
                  <th>Details</th>
                  <th style={{ width: '120px' }}>Options</th>
                </tr>
              </thead>
              <tbody>
                {addresses.map((addr) => (
                  <tr key={addr.id} className={selected.includes(addr.id) ? 'selected' : ''}>
                    <td>
                      <input
                        type="checkbox"
                        checked={selected.includes(addr.id)}
                        onChange={() => toggleSelect(addr.id)}
                      />
                    </td>
                    <td className="macAddress">{addr.ipmac}</td>
                    <td>{addr.interface}</td>
                    <td>{addr.expires}</td>
                    <td className="capCell">{addr.cap}</td>
                    <td>{addr.issuedBy}</td>
                    <td>{addr.details}</td>
                    <td className="optionsCell">
                      <a href="#" className="optionLink">Remove</a>
                      {' | '}
                      <a href="#" className="optionLink">Modify</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  )
}