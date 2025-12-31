import { useState } from 'react'
import './Login.css'

export default function Login({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    // TODO: Appel API
    // try {
    //   const response = await fetch('/api/auth/login', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    //   })
    //   const data = await response.json()
    //   // Gérer la connexion réussie
    // } catch (error) {
    //   console.error('Erreur de connexion:', error)
    // } finally {
    //   setIsLoading(false)
    // }

    // Simulation
    setTimeout(() => {
    console.log('Connexion avec:', { email, password })
    setIsLoading(false)
    // Appeler onSuccess pour passer à la page 2FA
    if (onSuccess) {
      onSuccess(email)
    }
  }, 1500)
  }

  return (
    <div className="loginPage">
      <div className="loginLeft">
        <div className="loginBrand">
          <div className="brandLogo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L5 15V25L20 35L35 25V15L20 5Z" fill="#EDC707"/>
              <circle cx="20" cy="20" r="8" fill="#052F5F"/>
            </svg>
          </div>
          <div className="brandText">
            <h1 className="brandName">MboaLink</h1>
            <p className="brandTagline">HOSPITALITY • TRANSPORT • SMART ACCESS</p>
          </div>
        </div>

        <div className="loginHero">
          <h2 className="heroTitle">
            Connectez-vous à<br />
            votre <span className="highlight">écosystème</span> Mboa.
          </h2>
          <p className="heroDescription">
            MboaLink synchronise vos hôtels, gares routières et partenaires en une 
            seule plateforme fluide, pensée pour l'Afrique et le monde.
          </p>

          <div className="features">
            <div className="feature">
              <div className="featureIcon">✓</div>
              <span>Check-in en moins de 30s</span>
            </div>
            <div className="feature">
              <div className="featureIcon">✓</div>
              <span>Monitoring temps réel</span>
            </div>
            <div className="feature">
              <div className="featureIcon">✓</div>
              <span>Data sécurisée & conforme</span>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="statValue">+120</div>
              <div className="statLabel">Sites connectés</div>
            </div>
            <div className="stat">
              <div className="statValue">99.9%</div>
              <div className="statLabel">Disponibilité</div>
            </div>
            <div className="stat">
              <div className="statValue">24/7</div>
              <div className="statLabel">Support dédié</div>
            </div>
          </div>
        </div>

        <footer className="loginFooter">
          <p>© 2025 MboaLink. Tous droits réservés.</p>
        </footer>
      </div>

      <div className="loginRight">
        <div className="loginCard">
          <h3 className="cardTitle">Connexion</h3>
          <p className="cardSubtitle">Accédez à votre espace d'administration sécurisé</p>

          <form onSubmit={handleSubmit} className="loginForm">
            <div className="formGroup">
              <label htmlFor="email">Adresse e-mail</label>
              <input
                id="email"
                type="email"
                placeholder="vous@entreprise.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <div className="formGroup">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                placeholder="Votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>

            <a href="#" className="forgotPassword">Mot de passe oublié ?</a>

            <button type="submit" className="submitBtn" disabled={isLoading}>
              {isLoading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>

          <p className="helpText">
            Besoin d'un accès ? <a href="#">Contacter l'administrateur</a>
          </p>
        </div>
      </div>
    </div>
  )
}