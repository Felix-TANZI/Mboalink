// @ts-nocheck
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { authService } from '@/services'
import { routes } from '@/router/routes'
import './LoginMfa.css'

export default function LoginMfa() {
  const navigate = useNavigate()
  const location = useLocation()

  // L'email est transmis depuis LoginPage via navigate state
  const email = location.state?.email || ''

  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Si on arrive sur cette page sans email (accès direct), retourner au login
  if (!email) {
    navigate(routes.public.login, { replace: true })
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (code.length < 6) {
      setError('Veuillez entrer un code valide à 6 chiffres')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      await authService.verifyMfa(email, code)
      // Tokens sauvegardés dans authService.verifyMfa → rediriger vers l'app
      navigate(routes.public.home, { replace: true })
    } catch (err) {
      setError(err?.message || 'Code invalide ou expiré')
      setCode('')
    } finally {
      setIsLoading(false)
    }
  }

  const handleBack = () => {
    navigate(routes.public.login, { replace: true })
  }

  return (
    <div className="twoFactorPage">
      <div className="twoFactorCard">
        <div className="tfBrand">
          <div className="tfLogo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 5L5 15V25L20 35L35 25V15L20 5Z" fill="#EDC707"/>
              <circle cx="20" cy="20" r="8" fill="#052F5F"/>
            </svg>
          </div>
          <h1 className="tfBrandName">MboaLink</h1>
        </div>

        <div className="tfContent">
          <h2 className="tfTitle">Multi-factor authentification</h2>
          <p className="tfSubtitle">Additional security code required</p>

          <div className="userInfo">
            <div className="userAvatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="userEmail">
              User: <strong>{email}</strong>
            </div>
            <button
              type="button"
              className="restartLink"
              onClick={handleBack}
            >
              Restart login
            </button>
          </div>

          <p className="tfInstructions">
            Un code de vérification à 6 chiffres a été envoyé à votre adresse email. Saisissez-le ci-dessous.
          </p>

          <form onSubmit={handleSubmit} className="tfForm">
            <input
              type="text"
              inputMode="numeric"
              placeholder="000000"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, '').slice(0, 6))
                setError('')
              }}
              maxLength={6}
              className="codeInput"
              disabled={isLoading}
              autoFocus
            />

            {error && <div className="errorMessage">{error}</div>}

            <button
              type="submit"
              className="tfSubmitBtn"
              disabled={isLoading || code.length < 6}
            >
              {isLoading ? 'Vérification...' : 'Sign in'}
            </button>
          </form>

          <p className="tfHelp">
            Having trouble with your code?{' '}
            <a href="#">Use a backup method</a> or{' '}
            <a href="#">contact your administrator</a>
          </p>
        </div>
      </div>
    </div>
  )
}