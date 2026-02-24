import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import '../styles/Auth.css'

function Auth() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { login, signup, loginWithGoogle } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isLogin) {
        await login(email, password)
      } else {
        await signup(email, password)
      }
      navigate('/')
    } catch (err) {
      setError(getFriendlyError(err.code))
    }

    setLoading(false)
  }

  async function handleGoogle() {
    setError('')
    try {
      await loginWithGoogle()
      navigate('/')
    } catch (err) {
      setError('Google sign in failed. Please try again.')
    }
  }

  function handleGuest() {
    navigate('/')
  }

  function getFriendlyError(code) {
    switch (code) {
      case 'auth/email-already-in-use': return 'This email is already registered.'
      case 'auth/invalid-email': return 'Please enter a valid email.'
      case 'auth/wrong-password': return 'Incorrect password.'
      case 'auth/user-not-found': return 'No account found with this email.'
      case 'auth/weak-password': return 'Password must be at least 6 characters.'
      default: return 'Something went wrong. Please try again.'
    }
  }

  return (
    <div className="auth">
      <div className="auth__left">
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
          alt="Fashion"
          className="auth__image"
        />
        <div className="auth__image-overlay">
          <h2 className="auth__image-text">LUMIÈRE</h2>
          <p className="auth__image-subtext">Timeless style, modern design.</p>
        </div>
      </div>

      <div className="auth__right">
        <div className="auth__form-wrapper">
          <h1 className="auth__title">{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
          <p className="auth__subtitle">
            {isLogin ? 'Sign in to your account' : 'Join LUMIÈRE today'}
          </p>

          {error && <div className="auth__error">{error}</div>}

          <form onSubmit={handleSubmit} className="auth__form">
            {!isLogin && (
              <div className="auth__field">
                <label>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  required
                />
              </div>
            )}

            <div className="auth__field">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="auth__field">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <button type="submit" className="auth__btn" disabled={loading}>
              {loading ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="auth__divider"><span>or</span></div>

          <button className="auth__google-btn" onClick={handleGoogle}>
            <img src="https://www.google.com/favicon.ico" alt="Google" width="16" />
            Continue with Google
          </button>

          <button className="auth__guest-btn" onClick={handleGuest}>
            Continue as Guest
          </button>

          <p className="auth__toggle">
            {isLogin ? "Don't have an account?" : 'Already have an account?'}
            <button onClick={() => { setIsLogin(!isLogin); setError('') }}>
              {isLogin ? ' Sign Up' : ' Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Auth