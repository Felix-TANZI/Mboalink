import { useState } from 'react'
import Layout from '../components/Layout'
import './ManualLogin.css'

export default function ManualLogin({ onNavigate }) {
  const [selectedRoom, setSelectedRoom] = useState('')
  const [passcode, setPasscode] = useState('')

  const rooms = [
    'Room 101',
    'Room 102',
    'Room 103',
    'Room 201',
    'Room 202',
    'Room 301',
    'Suite Présidentielle',
    'Chambre Executive'
  ]

  const handleProceed = () => {
    if (!selectedRoom) {
      alert('Please select a room')
      return
    }

    console.log('Manual login for:', { room: selectedRoom, passcode })
    
    // TODO: API call
    // try {
    //   const response = await fetch('/api/manual-login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ room: selectedRoom, passcode })
    //   })
    //   const data = await response.json()
    //   // Handle success
    // } catch (error) {
    //   console.error('Error:', error)
    // }

    alert('Manual login successful!')
  }

  const handleCancel = () => {
    setSelectedRoom('')
    setPasscode('')
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Manual Login" onNavigate={onNavigate}>
      <div className="manualLoginPage">
        <div className="manualLoginCard">
          <div className="cardHeader">
            <h1 className="cardTitle">Manual Login</h1>
            <p className="cardSubtitle">
              Please specify room. If room does not exist, check the Room Details list for help.
            </p>
          </div>

          <div className="cardBody">
            <div className="formSection">
              <h3 className="sectionTitle">Room Information</h3>

              <div className="formField">
                <label htmlFor="roomName">Room Name</label>
                <p className="fieldHelp">
                  Text Field will take precedence. Leave text field blank if selecting room from accompanying list.
                </p>
                <select
                  id="roomName"
                  value={selectedRoom}
                  onChange={(e) => setSelectedRoom(e.target.value)}
                  className="roomSelect"
                >
                  <option value="">No Room Selected</option>
                  {rooms.map((room) => (
                    <option key={room} value={room}>
                      {room}
                    </option>
                  ))}
                </select>
              </div>

              <div className="formField">
                <label htmlFor="passcode">Passcode</label>
                <p className="fieldHelp">
                  If reservation or daypass access required.
                </p>
                <input
                  id="passcode"
                  type="text"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (optional)"
                  className="passcodeInput"
                />
              </div>
            </div>

            <div className="cardActions">
              <button className="btn btnPrimary" onClick={handleProceed}>
                Proceed
              </button>
              <button className="btn btnSecondary" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}