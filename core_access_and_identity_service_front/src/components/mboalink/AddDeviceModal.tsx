import { useEffect, useState } from 'react'
import './AddDeviceModal.css'

type AddDeviceModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: Record<string, unknown>) => void;
  hotels: Array<{ id: string; name: string }>;
  defaultHotelId?: string;
};

export default function AddDeviceModal({ isOpen, onClose, onSave, hotels, defaultHotelId }: AddDeviceModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>({
    hotelId: defaultHotelId || '',
    macAddress: '',
    serialNumber: '',
    model: '',
    firmwareVersion: '',
    localIp: '',
    zone: '',
    floor: '',
    installedAt: '',
  })

  useEffect(() => {
    setFormData((prev: Record<string, any>) => ({
      ...prev,
      hotelId: defaultHotelId || prev.hotelId,
    }))
  }, [defaultHotelId])

  const handleChange = (field: string, value: string) => {
    setFormData((prev: Record<string, any>) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    if (!formData.hotelId) {
      alert('Sélectionnez un hôtel')
      return
    }
    if (!formData.macAddress) {
      alert('Veuillez saisir la MAC address')
      return
    }

    onSave({
      hotelId: formData.hotelId,
      macAddress: formData.macAddress,
      serialNumber: formData.serialNumber || undefined,
      model: formData.model || undefined,
      firmwareVersion: formData.firmwareVersion || undefined,
      localIp: formData.localIp || undefined,
      zone: formData.zone || undefined,
      floor: formData.floor ? Number(formData.floor) : undefined,
      installedAt: formData.installedAt ? new Date(formData.installedAt).toISOString() : undefined,
    })
  }

  if (!isOpen) return null

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <div className="modalHeader">
          <button className="backBtn" onClick={onClose}>
            ← BACK
          </button>
          <div className="modalTitle">
            <h2>Add Device</h2>
            <p>Ajoutez un point d’accès Wi‑Fi ou un équipement réseau.</p>
          </div>
        </div>

        <div className="modalBody">
          <section className="formSection">
            <h3 className="sectionTitle">Device Information</h3>

            <div className="formRow">
              <div className="formLabel">
                <label>Hôtel *</label>
              </div>
              <select
                value={formData.hotelId}
                onChange={(e) => handleChange('hotelId', e.target.value)}
              >
                <option value="">Sélectionner un hôtel</option>
                {hotels.map((hotel) => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
              </select>
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>MAC Address *</label>
              </div>
              <input
                type="text"
                value={formData.macAddress}
                onChange={(e) => handleChange('macAddress', e.target.value)}
                placeholder="AA:BB:CC:DD:EE:FF"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Serial Number</label>
              </div>
              <input
                type="text"
                value={formData.serialNumber}
                onChange={(e) => handleChange('serialNumber', e.target.value)}
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Modèle</label>
              </div>
              <input
                type="text"
                value={formData.model}
                onChange={(e) => handleChange('model', e.target.value)}
                placeholder="Ubiquiti / TP-Link / MikroTik"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Firmware</label>
              </div>
              <input
                type="text"
                value={formData.firmwareVersion}
                onChange={(e) => handleChange('firmwareVersion', e.target.value)}
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>IP Locale</label>
              </div>
              <input
                type="text"
                value={formData.localIp}
                onChange={(e) => handleChange('localIp', e.target.value)}
                placeholder="192.168.1.10"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Zone</label>
              </div>
              <input
                type="text"
                value={formData.zone}
                onChange={(e) => handleChange('zone', e.target.value)}
                placeholder="LOBBY / FLOOR-1"
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Étage</label>
              </div>
              <input
                type="number"
                value={formData.floor}
                onChange={(e) => handleChange('floor', e.target.value)}
              />
            </div>

            <div className="formRow">
              <div className="formLabel">
                <label>Date d'installation</label>
              </div>
              <input
                type="date"
                value={formData.installedAt}
                onChange={(e) => handleChange('installedAt', e.target.value)}
              />
            </div>
          </section>
        </div>

        <div className="modalFooter">
          <button className="btn btnPrimary" onClick={handleSubmit}>
            Ajouter
          </button>
          <button className="btn btnSecondary" onClick={onClose}>
            Annuler
          </button>
        </div>
      </div>
    </div>
  )
}
