// @ts-nocheck
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AlertTriangle, ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react'
import { authService } from '@/services'
import { routes } from '@/router/routes'
import mboalinkLogo from '@/assets/images/mboalink-logo-navbar.png'
import './SuperAdminLoginPage.css'

export default function SuperAdminLoginPage() {
  const navigate = useNavigate()
  const storedUser = authService.getStoredUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  if (storedUser?.role === 'ADMIN') {
    return <Navigate to={routes.public.adminMboa} replace />
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await authService.login({ email, password })

      if (result.mfaRequired) {
        navigate(routes.public.mfa, { state: { email: result.email, surface: 'super-admin' } })
        return
      }

      if (result.user?.role !== 'ADMIN') {
        await authService.logout()
        setError('Accès refusé. Cette console est réservée aux super administrateurs MboaLink.')
        return
      }

      navigate(routes.public.adminMboa, { replace: true })
    } catch (err) {
      setError(err?.message || 'Connexion impossible. Vérifiez vos identifiants administrateur.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="superAdminLoginPage">
      <section className="superAdminLoginHero" aria-label="Console super admin MboaLink">
        <div className="superAdminBrandPanel">
          <img src={mboalinkLogo} alt="MboaLink" />
          <span>Console indépendante</span>
        </div>

        <div className="superAdminHeroCopy">
          <div className="superAdminEyebrow"><ShieldCheck size={16} /> Accès super administrateur</div>
          <h1>Contrôle central MboaLink</h1>
          <p>
            Cette surface est isolée du portail opérationnel pour concentrer la gestion des établissement(s),
            utilisateurs, équipements réseau, notifications et paramètres sensibles.
          </p>
        </div>

        <div className="superAdminAssuranceGrid">
          <article>
            <LockKeyhole size={20} />
            <strong>Port dédié</strong>
            <span>Console séparée du flux standard.</span>
          </article>
          <article>
            <ShieldCheck size={20} />
            <strong>Rôle ADMIN requis</strong>
            <span>Les autres profils sont rejetés.</span>
          </article>
          <article>
            <AlertTriangle size={20} />
            <strong>Actions sensibles</strong>
            <span>Gestion plateforme et supervision globale.</span>
          </article>
        </div>
      </section>

      <section className="superAdminLoginPanel" aria-label="Connexion super administrateur">
        <div className="superAdminLoginCard">
          <div className="superAdminCardHeader">
            <span><LockKeyhole size={18} /></span>
            <div>
              <h2>Connexion Super Admin</h2>
              <p>Authentification réservée aux comptes ADMIN.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="superAdminLoginForm">
            {error && <div className="superAdminError"><AlertTriangle size={16} />{error}</div>}

            <label>
              Adresse e-mail
              <input
                type="email"
                placeholder="admin@mboalink.cm"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={isLoading}
                required
              />
            </label>

            <label>
              Mot de passe
              <input
                type="password"
                placeholder="Votre mot de passe administrateur"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                disabled={isLoading}
                required
              />
            </label>

            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Vérification...' : 'Entrer dans la console'}
              <ArrowRight size={17} />
            </button>
          </form>

          <p className="superAdminLegal">
            Toute tentative avec un rôle non autorisé ferme la session locale avant retour au formulaire.
          </p>
        </div>
      </section>
    </main>
  )
}
