import Button from '../../../components/common/Button'
import Card from '../../../components/common/Card'
import Input from '../../../components/common/Input'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

    const validateForm = () => {
    const newErrors = {}

    if (!email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address.'
    }

    if (!password) {
      newErrors.password = 'Password is required.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }
  const handleInputChange = (field, value) => {
  if (field === 'email') {
    setEmail(value)
  }

  if (field === 'password') {
    setPassword(value)
  }

  if (errors[field]) {
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: '',
    }))
  }
}
  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!validateForm()) {
    return
  }

  setIsLoading(true)

  try {
    // Temporary simulation of an authentication request
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Login form is valid')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    setIsLoading(false)
  }
}

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6 py-4 md:h-dvh md:overflow-hidden">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-primary sm:text-4xl">
            EVORA
          </h1>

          <p className="mt-1.5 text-sm text-secondary-text">
            Your university event experience starts here.
          </p>
        </div>

        {/* Login Card */}
        <Card className="p-6">
          <div className="mb-5 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">
              Welcome back.
            </h2>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <Input
              label="Email Address"
              id="email"
              inputType="email"
              placeholder="you@std.uwu.ac.lk"
              autoComplete="email"
              value={email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
            />

            <Input
              label="Password"
              id="password"
              inputType="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              required
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-sm text-primary transition-colors hover:text-primary-hover"
              >
                Forgot password?
              </button>
            </div>

            <Button
              type="submit"
              className="w-full py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Registration */}
          <div className="mt-5 border-t border-border pt-4 text-center">
            <p className="text-sm text-secondary-text">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-bold text-primary transition-colors hover:text-primary-hover"
                >
                Create an account
              </Link>
            </p>
          </div>
        </Card>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-secondary-text">
          EVORA // UNIVERSITY EVENT PLATFORM
        </p>

      </div>
    </div>
  )
}

export default LoginPage