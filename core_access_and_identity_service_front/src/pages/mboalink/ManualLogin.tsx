import { useEffect, useMemo, useState } from 'react'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import './ManualLogin.css'

export default function ManualLogin() {
  const [selectedHotel, setSelectedHotel] = useState('')
  const [selectedRoom, setSelectedRoom] = useState('')
  const [passcode, setPasscode] = useState('')
  const [hotels, setHotels] = useState<Array<Record<string, any>>>([])
  const [rooms, setRooms] = useState<Array<Record<string, any>>>([])

  useEffect(() => {
    Promise.all([mboalinkService.listHotels(), mboalinkService.listRooms()])
      .then(([hotelList, roomList]) => {
        setHotels(hotelList)
        setRooms(roomList)
        if (hotelList[0]) setSelectedHotel(hotelList[0].id)
      })
      .catch((error) => alert((error as Error).message || 'Impossible de charger les chambres'))
  }, [])

  const filteredRooms = useMemo(() => {
    if (!selectedHotel) return []
    return rooms.filter((room) => room.hotelId === selectedHotel)
  }, [rooms, selectedHotel])

  const handleProceed = async () => {
    if (!selectedHotel) {
      alert('Please select a hotel')
      return
    }

    if (!selectedRoom) {
      alert('Please select a room')
      return
    }

    try {
      await mboalinkService.createManualLogin({
        hotelId: selectedHotel,
        roomId: selectedRoom,
        passCode: passcode || undefined,
      })
      alert('Manual login successful!')
    } catch (error) {
      alert((error as Error).message || 'Manual login failed')
    }
  }

  const handleCancel = () => {
    setSelectedHotel('')
    setSelectedRoom('')
    setPasscode('')
  }

  return (
    <Layout activePage="LOGINS" activeSubPage="Manual Login">
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
                <label htmlFor="hotelName">Hotel</label>
                <select
                  id="hotelName"
                  value={selectedHotel}
                  onChange={(e) => {
                    setSelectedHotel(e.target.value)
                    setSelectedRoom('')
                  }}
                  className="roomSelect"
                >
                  <option value="">Select hotel</option>
                  {hotels.map((hotel) => (
                    <option key={hotel.id} value={hotel.id}>
                      {hotel.name}
                    </option>
                  ))}
                </select>
              </div>

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
                  {filteredRooms.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name || room.type}
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
