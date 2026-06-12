// @ts-nocheck
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { authService } from '@/services'
import { routes } from '@/router/routes'
import mboalinkLogo from '@/assets/images/mboalink-logo-navbar.png'
import './Login.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await authService.login({ email, password })

      if (result.mfaRequired) {
        // Rediriger vers la page MFA en passant l'email via le state
        navigate(routes.public.mfa, { state: { email: result.email } })
      } else {
        const redirect = new URLSearchParams(location.search).get('redirect')
        const target = result.user?.role === 'RECEPTIONIST'
          ? routes.public.manualLogin
          : ['ADMIN', 'SUPPORT', 'HOTEL_IT'].includes(result.user?.role)
            ? routes.public.dashboard
            : routes.public.home
        navigate(redirect?.startsWith('/') && redirect !== routes.public.login ? redirect : target, { replace: true })
      }
    } catch (err) {
      setError(err?.message || 'Identifiants incorrects')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="loginPage">
      <div className="loginLeft">
        <div className="loginBrand">
          <div className="brandLogo">
            <img src={mboalinkLogo} alt="MboaLink" />
          </div>
          <div className="brandText">
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
            {error && <p className="helpText" style={{ color: '#b91c1c' }}>{error}</p>}
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
