// @ts-nocheck
import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Layout from '@/components/mboalink/Layout'
import { mboalinkService } from '@/services'
import { authService } from '@/services/auth/authService'
import { ALL_HOTELS, canSelectHotelScope, getInitialHotelScope, hotelScopeToQuery } from '@/utils/hotelScope'
import './NetworkMap3D.css'

function inferDeviceKind(device) {
  const source = `${device.model || ''} ${device.serialNumber || ''} ${device.zone || ''}`.toLowerCase()
  if (source.includes('switch')) return 'switch'
  if (source.includes('access') || source.includes('ap') || source.includes('wifi')) return 'ap'
  if (source.includes('router') || source.includes('gateway')) return 'gateway'
  return 'device'
}

function statusColor(status) {
  if (status === 'ONLINE') return 0x16a34a
  if (status === 'UNSTABLE') return 0xf2c300
  return 0x64748b
}

function makeTextSprite(text, color = '#0f172a') {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 512
  canvas.height = 128
  ctx.font = '700 34px Arial'
  ctx.fillStyle = 'rgba(255,255,255,0.92)'
  ctx.roundRect(0, 14, 512, 72, 18)
  ctx.fill()
  ctx.fillStyle = color
  ctx.fillText(text.slice(0, 26), 28, 60)
  const texture = new THREE.CanvasTexture(canvas)
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true })
  const sprite = new THREE.Sprite(material)
  sprite.scale.set(4.8, 1.2, 1)
  return sprite
}

function addLine(scene, start, end, color = 0x94a3b8) {
  const geometry = new THREE.BufferGeometry().setFromPoints([start, end])
  const material = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.75 })
  const line = new THREE.Line(geometry, material)
  scene.add(line)
  return line
}

function addNode(scene, { position, color, label, shape = 'box', scale = [1, 1, 1] }) {
  const geometry = shape === 'sphere'
    ? new THREE.SphereGeometry(0.45, 32, 18)
    : shape === 'cylinder'
      ? new THREE.CylinderGeometry(0.42, 0.55, 1.2, 32)
      : new THREE.BoxGeometry(1, 1, 1)

  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: 0.42,
    metalness: 0.08,
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.copy(position)
  mesh.scale.set(scale[0], scale[1], scale[2])
  mesh.castShadow = true
  mesh.receiveShadow = true
  scene.add(mesh)

  const labelSprite = makeTextSprite(label)
  labelSprite.position.set(position.x, position.y + 1.25, position.z)
  scene.add(labelSprite)

  return mesh
}

export default function NetworkMap3D() {
  const currentUser = authService.getStoredUser()
  const canChooseHotel = canSelectHotelScope(currentUser)
  const mountRef = useRef(null)
  const [devices, setDevices] = useState([])
  const [sessions, setSessions] = useState([])
  const [hotels, setHotels] = useState([])
  const [hotelOptions, setHotelOptions] = useState([])
  const [selectedHotelId, setSelectedHotelId] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState('')
  const [renderError, setRenderError] = useState('')

  const loadTopology = async (scope, availableHotels = hotelOptions) => {
    setIsLoading(true)
    const scopedHotelId = hotelScopeToQuery(scope)
    const query = scopedHotelId ? { hotelId: scopedHotelId } : undefined
    Promise.all([
      mboalinkService.listDevices(query),
      mboalinkService.listLoginSessions(query),
    ])
      .then(([deviceList, sessionList]) => {
        setDevices(deviceList)
        setSessions(sessionList)
        setHotels(scopedHotelId ? availableHotels.filter((hotel) => hotel.id === scopedHotelId) : availableHotels)
      })
      .catch((error) => {
        console.warn(error)
        setLoadError('Donnees live indisponibles, affichage de la topologie de reference.')
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    mboalinkService.listHotels()
      .then(async (hotelList) => {
        setHotelOptions(hotelList)
        const defaultScope = getInitialHotelScope(currentUser, hotelList)
        setSelectedHotelId(defaultScope)
        await loadTopology(defaultScope, hotelList)
      })
      .catch((error) => {
        console.warn(error)
        setLoadError('Donnees live indisponibles, affichage de la topologie de reference.')
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (!selectedHotelId || hotelOptions.length === 0) return
    loadTopology(selectedHotelId)
  }, [selectedHotelId])

  const summary = useMemo(() => {
    const online = devices.filter((device) => device.status === 'ONLINE').length
    const unstable = devices.filter((device) => device.status === 'UNSTABLE').length
    const offline = devices.filter((device) => device.status === 'OFFLINE').length
    const activeSessions = sessions.filter((session) => session.status === 'ONLINE').length
    return { online, unstable, offline, activeSessions }
  }, [devices, sessions])

  useEffect(() => {
    if (!mountRef.current) return

    const mount = mountRef.current
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xf8fafc)
    scene.fog = new THREE.Fog(0xf8fafc, 28, 74)

    const camera = new THREE.PerspectiveCamera(48, mount.clientWidth / mount.clientHeight, 0.1, 1000)
    camera.position.set(9, 10, 17)

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
      setRenderError('')
    } catch (error) {
      console.warn(error)
      setRenderError('Affichage 3D indisponible sur ce navigateur, topologie simplifiee affichee.')
      mount.innerHTML = ''
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.innerHTML = ''
    mount.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.maxPolarAngle = Math.PI / 2.08
    controls.minDistance = 8
    controls.maxDistance = 42
    controls.target.set(0, 1.2, 0)

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0xdbeafe, 1.6)
    scene.add(hemiLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.1)
    keyLight.position.set(10, 18, 8)
    keyLight.castShadow = true
    keyLight.shadow.mapSize.set(2048, 2048)
    scene.add(keyLight)

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(34, 24, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.72 }),
    )
    floor.rotation.x = -Math.PI / 2
    floor.receiveShadow = true
    scene.add(floor)

    const grid = new THREE.GridHelper(34, 22, 0xcbd5e1, 0xe2e8f0)
    grid.position.y = 0.01
    scene.add(grid)

    const hotelName = selectedHotelId === ALL_HOTELS
      ? 'MboaLink Multi-hotels'
      : hotels[0]?.name || 'Hotel MboaLink'
    const hotelBase = new THREE.Vector3(-11, 1.2, 0)
    addNode(scene, {
      position: hotelBase,
      color: 0x052f5f,
      label: hotelName,
      shape: 'box',
      scale: [1.8, 2.6, 1.8],
    })

    const gatewayPos = new THREE.Vector3(-5.8, 1.1, 0)
    addNode(scene, {
      position: gatewayPos,
      color: 0xf2c300,
      label: 'Gateway',
      shape: 'box',
      scale: [1.5, 0.9, 1.2],
    })
    addLine(scene, hotelBase, gatewayPos, 0x052f5f)

    const switchDevices = devices.filter((device) => inferDeviceKind(device) === 'switch')
    const apDevices = devices.filter((device) => inferDeviceKind(device) === 'ap')
    const otherDevices = devices.filter((device) => !['switch', 'ap'].includes(inferDeviceKind(device)))
    const switches = switchDevices.length ? switchDevices : otherDevices.slice(0, 2)
    const aps = apDevices.length ? apDevices : devices.slice(0, 6)

    const switchPositions = (switches.length ? switches : [{ id: 'sw-1', model: 'Core Switch', status: 'ONLINE' }])
      .slice(0, 4)
      .map((device, index, arr) => {
        const z = arr.length === 1 ? 0 : -5 + index * (10 / Math.max(arr.length - 1, 1))
        const pos = new THREE.Vector3(-0.8, 1, z)
        addNode(scene, {
          position: pos,
          color: statusColor(device.status || 'ONLINE'),
          label: device.model || device.serialNumber || `Switch ${index + 1}`,
          shape: 'box',
          scale: [1.5, 0.62, 1],
        })
        addLine(scene, gatewayPos, pos, 0x2563eb)
        return { device, pos }
      })

    const apSource = aps.length ? aps : [
      { id: 'ap-1', model: 'AP Lobby', status: 'ONLINE', zone: 'Lobby' },
      { id: 'ap-2', model: 'AP Rooms', status: 'ONLINE', zone: 'Rooms' },
      { id: 'ap-3', model: 'AP Conference', status: 'UNSTABLE', zone: 'Conference' },
    ]

    const apNodes = apSource.slice(0, 10).map((device, index) => {
      const row = index % 2
      const column = Math.floor(index / 2)
      const x = 4 + column * 2.7
      const z = row === 0 ? -4.7 : 4.7
      const pos = new THREE.Vector3(x, 1.05, z)
      addNode(scene, {
        position: pos,
        color: statusColor(device.status || 'ONLINE'),
        label: device.zone || device.model || `AP ${index + 1}`,
        shape: 'cylinder',
        scale: [1, 1, 1],
      })
      const parent = switchPositions[index % switchPositions.length]?.pos || gatewayPos
      addLine(scene, parent, pos, 0x94a3b8)
      return { device, pos }
    })

    sessions.filter((session) => session.status === 'ONLINE').slice(0, 14).forEach((session, index) => {
      const parent = apNodes[index % apNodes.length]?.pos || gatewayPos
      const angle = (index / 14) * Math.PI * 2
      const radius = 1.35 + (index % 3) * 0.35
      const pos = new THREE.Vector3(
        parent.x + Math.cos(angle) * radius,
        0.55,
        parent.z + Math.sin(angle) * radius,
      )
      addNode(scene, {
        position: pos,
        color: 0x7c3aed,
        label: session.clientName || session.room?.name || 'Client',
        shape: 'sphere',
        scale: [0.52, 0.52, 0.52],
      })
      addLine(scene, parent, pos, 0x7c3aed)
    })

    let frame = 0
    const animate = () => {
      frame = requestAnimationFrame(animate)
      scene.traverse((object) => {
        if (object.isMesh && object.geometry?.type === 'CylinderGeometry') {
          object.rotation.y += 0.006
        }
      })
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      if (!mount.clientWidth || !mount.clientHeight) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', handleResize)
      controls.dispose()
      renderer.dispose()
      scene.traverse((object) => {
        object.geometry?.dispose?.()
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose?.())
          } else {
            object.material.dispose?.()
          }
        }
      })
      mount.innerHTML = ''
    }
  }, [devices, sessions, hotels, selectedHotelId])

  return (
    <Layout activePage="DASHBOARD" activeSubPage="Network Map">
      <div className="networkMapPage">
        <div className="networkMapHeader">
          <div>
            <p className="networkMapEyebrow">Architecture reseau 3D</p>
            <h1>{selectedHotelId === ALL_HOTELS ? 'Carte reseau multi-hotels' : "Carte reseau de l'hotel"}</h1>
            <span>Gateway, switchs, access points et clients actifs dans une vue interactive.</span>
          </div>
          {canChooseHotel && (
            <select
              className="networkMapScopeSelect"
              value={selectedHotelId}
              onChange={(event) => setSelectedHotelId(event.target.value)}
            >
              <option value={ALL_HOTELS}>Tous les hôtels</option>
              {hotelOptions.map((hotel) => (
                <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
              ))}
            </select>
          )}
          <div className="networkMapStats">
            <strong>{summary.online}</strong><span>Online</span>
            <strong>{summary.unstable}</strong><span>Instables</span>
            <strong>{summary.activeSessions}</strong><span>Clients</span>
          </div>
        </div>

        <div className="networkMapSceneShell">
          <div ref={mountRef} className="networkMapCanvas" />
          {isLoading && <div className="networkMapLoading">Chargement de la topologie...</div>}
          {loadError && <div className="networkMapNotice">{loadError}</div>}
          {renderError && (
            <div className="networkMapFallback">
              <div className="fallbackNode hotel">Hotel</div>
              <div className="fallbackLine" />
              <div className="fallbackNode gateway">Gateway</div>
              <div className="fallbackLine" />
              <div className="fallbackCluster">
                <div className="fallbackNode switch">Switch</div>
                <div className="fallbackNode ap">Access Point</div>
                <div className="fallbackNode client">Clients</div>
              </div>
              <p>{renderError}</p>
            </div>
          )}
          <div className="networkMapLegend">
            <span><i className="legendGateway" /> Gateway</span>
            <span><i className="legendOnline" /> Online</span>
            <span><i className="legendWarning" /> Instable</span>
            <span><i className="legendClient" /> Client actif</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
