import { useState } from 'react'
import './TwoFactor.css'

export default function TwoFactor({ userEmail, onBack, onSuccess }) {
  const [code, setCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (code.length < 6) {
      setError('Please enter a valid 6-digit code')
      return
    }

    setIsLoading(true)
    setError('')

    // TODO: Appel API
    // try {
    //   const response = await fetch('/api/auth/verify-2fa', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ code, email: userEmail })
    //   })
    //   const data = await response.json()
    //   // Rediriger vers le dashboard
    // } catch (error) {
    //   setError('Invalid verification code')
    // } finally {
    //   setIsLoading(false)
    // }

    // Simulation
    setTimeout(() => {
      console.log('2FA Code:', code)
      setIsLoading(false)
      if (code === '123456') {
  if (onSuccess) {
    onSuccess()
  }
}
    }, 1000)
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
              User: <strong>{userEmail}</strong>
            </div>
            <button 
              type="button" 
              className="restartLink"
              onClick={onBack}
            >
              Restart login
            </button>
          </div>

          <p className="tfInstructions">
            Enter the verification code from your authenticator application.
          </p>

          <form onSubmit={handleSubmit} className="tfForm">
            <input
              type="text"
              placeholder="One-time code"
              value={code}
              onChange={(e) => {
                setCode(e.target.value.replace(/\D/g, '').slice(0, 6))
                setError('')
              }}
              maxLength="6"
              className="codeInput"
              disabled={isLoading}
              autoFocus
            />

            {error && <div className="errorMessage">{error}</div>}

            <button type="submit" className="tfSubmitBtn" disabled={isLoading || code.length < 6}>
              {isLoading ? 'Verifying...' : 'Sign in'}
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