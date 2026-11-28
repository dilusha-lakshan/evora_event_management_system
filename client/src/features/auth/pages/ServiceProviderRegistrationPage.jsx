
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import Card from '../../../components/common/Card'
import Input from '../../../components/common/Input'

function GoogleIcon() {
  return (
    <svg viewBox="0 0 48 48" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11a9.4 9.4 0 0 1-4.1 6.2v5h6.6c3.9-3.6 6.1-8.8 6.1-14.9Z"
      />
      <path
        fill="#34A853"
        d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.1A20 20 0 0 0 24 44Z"
      />
      <path
        fill="#FBBC05"
        d="M12.6 27.8a12 12 0 0 1 0-7.6v-5.1H5.8a20 20 0 0 0 0 17.8l6.8-5.1Z"
      />
      <path
        fill="#EA4335"
        d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.8 29.5 4 24 4A20 20 0 0 0 5.8 15.1l6.8 5.1c1.6-4.8 6.1-8.4 11.4-8.4Z"
      />
    </svg>
  )
}

function ServiceProviderRegistrationPage() {
  const [formData, setFormData] = useState({
    providerName: '',
    contactPerson: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [googleMessage, setGoogleMessage] = useState('')

  const handleInputChange = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }))

    if (errors[field]) {
      setErrors((current) => ({
        ...current,
        [field]: '',
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.providerName.trim()) {
      newErrors.providerName = 'Provider or business name is required.'
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = 'Contact person is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Minimum 8 characters.'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password.'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = 'You must accept the terms and conditions.'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Backend registration will be connected later.
      console.log('Service provider registration form is valid.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignUp = () => {
    setGoogleMessage(
      'Google sign-up will be available after authentication integration.'
    )
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-4">
      <div className="w-full max-w-lg">

        {/* Branding */}
        <div className="mb-4 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-primary">
            EVORA
          </h1>
        </div>

        {/* Registration Card */}
        <Card className="p-5 sm:p-6">

          <div className="mb-4 text-center">
            <h2 className="text-xl font-bold">
              SERVICE PROVIDER REGISTRATION
            </h2>

            <p className="mt-1 text-sm text-secondary-text">
              Create your service provider account.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">

            {/* Provider Name and Contact Person */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Provider / Business Name"
                id="providerName"
                placeholder="Business name"
                value={formData.providerName}
                onChange={(e) =>
                  handleInputChange('providerName', e.target.value)
                }
                error={errors.providerName}
                required
              />

              <Input
                label="Contact Person"
                id="contactPerson"
                placeholder="Full name"
                autoComplete="name"
                value={formData.contactPerson}
                onChange={(e) =>
                  handleInputChange('contactPerson', e.target.value)
                }
                error={errors.contactPerson}
                required
              />
            </div>

            {/* Email */}
            <Input
              label="Email Address"
              id="email"
              inputType="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                handleInputChange('email', e.target.value)
              }
              error={errors.email}
              required
            />

            {/* Password Fields */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="Password"
                id="password"
                inputType="password"
                placeholder="Min 8 characters"
                autoComplete="new-password"
                value={formData.password}
                onChange={(e) =>
                  handleInputChange('password', e.target.value)
                }
                error={errors.password}
                required
              />

              <Input
                label="Confirm Password"
                id="confirmPassword"
                inputType="password"
                placeholder="Re-enter password"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={(e) =>
                  handleInputChange('confirmPassword', e.target.value)
                }
                error={errors.confirmPassword}
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div>
              <label className="flex cursor-pointer items-start gap-2 text-xs text-secondary-text">
                <input
                  type="checkbox"
                  checked={formData.acceptedTerms}
                  onChange={(e) =>
                    handleInputChange('acceptedTerms', e.target.checked)
                  }
                  className="mt-0.5 accent-primary"
                />

                <span>
                  I agree to the{' '}
                  <Link
                    to="/terms"
                    className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover"
                  >
                    Terms and Conditions
                  </Link>{' '}
                  and{' '}
                  <Link
                    to="/privacy"
                    className="font-medium text-primary underline underline-offset-2 hover:text-primary-hover"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {errors.acceptedTerms && (
                <p className="mt-1 text-xs text-red-400">
                  {errors.acceptedTerms}
                </p>
              )}
            </div>

            {/* Create Account */}
            <Button
              type="submit"
              className="w-full py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

          </form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs text-secondary-text">OR</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="flex w-full items-center justify-center gap-3 border border-border bg-surface px-4 py-3 text-sm font-medium text-main-text transition-colors hover:border-primary hover:bg-elevated"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {googleMessage && (
            <p className="mt-2 text-center text-xs text-secondary-text">
              {googleMessage}
            </p>
          )}

          {/* Login Link */}
          <div className="mt-4 border-t border-border pt-3 text-center">
            <p className="text-sm text-secondary-text">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-bold text-primary transition-colors hover:text-primary-hover"
              >
                Sign in
              </Link>
            </p>
          </div>

        </Card>

        {/* Footer */}
        <p className="mt-3 text-center text-xs text-secondary-text">
          EVORA // UNIVERSITY EVENT PLATFORM
        </p>

      </div>
    </div>
  )
}

export default ServiceProviderRegistrationPage
