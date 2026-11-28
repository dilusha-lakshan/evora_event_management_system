
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import Card from '../../../components/common/Card'
import Input from '../../../components/common/Input'

function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setError('Email address is required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    setError('')
    setIsLoading(true)

    try {
      // Password reset API will be connected later.
      console.log('Password reset requested for:', email)
      setIsSubmitted(true)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-4 md:h-dvh md:overflow-hidden">
      <div className="w-full max-w-md">

        {/* Branding */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-primary sm:text-4xl">
            EVORA
          </h1>
        </div>

        {/* Forgot Password Card */}
        <Card className="p-6">

          {!isSubmitted ? (
            <>
              <div className="mb-6 text-center">
                <h2 className="text-xl font-bold sm:text-2xl">
                  RESET PASSWORD
                </h2>

                <p className="mt-2 text-sm leading-relaxed text-secondary-text">
                  Enter the email address
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">

                <Input
                  label="Email Address"
                  id="email"
                  inputType="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  error={error}
                  required
                />

                <Button
                  type="submit"
                  className="w-full py-3"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending Instructions...' : 'Send Reset Link'}
                </Button>

              </form>
            </>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center border border-primary/40 bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-7 w-7 text-primary"
                >
                  <path d="M4 5H20V19H4Z" />
                  <path d="M4 7L12 13L20 7" />
                  <path d="M9 16L11 18L15 14" />
                </svg>
              </div>

              <h2 className="text-xl font-bold">
                CHECK YOUR EMAIL
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-secondary-text">
                If an account exists for{' '}
                <span className="font-bold text-main-text">
                  {email}
                </span>
                , password reset instructions will be sent to that address.
              </p>

              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-5 text-sm font-bold text-primary transition-colors hover:text-primary-hover"
              >
                Try another email
              </button>
            </div>
          )}

          {/* Back to Login */}
          <div className="mt-5 border-t border-border pt-4 text-center">
            <Link
              to="/login"
              className="text-sm font-bold text-primary transition-colors hover:text-primary-hover"
            >
              ← Back to Sign In
            </Link>
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

export default ForgotPasswordPage
