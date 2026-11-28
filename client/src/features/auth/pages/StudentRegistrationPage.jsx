import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import Card from '../../../components/common/Card'
import Input from '../../../components/common/Input'

function StudentRegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTerms: false,
  })

  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required.'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'University email is required.'
    } else if (
      !/^[^\s@]+@std\.uwu\.ac\.lk$/i.test(formData.email.trim())
    ) {
      newErrors.email = 'Use your university email address.'
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
      // Backend registration will be connected in a later stage.
      console.log('Student registration form is valid.')
    } finally {
      setIsLoading(false)
    }
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
              STUDENT REGISTRATION
            </h2>

            <p className="mt-1 text-sm text-secondary-text">
              Create your university account.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-3">

            {/* First Name and Last Name */}
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Input
                label="First Name"
                id="firstName"
                placeholder="First name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={(e) =>
                  handleInputChange('firstName', e.target.value)
                }
                error={errors.firstName}
                required
              />

              <Input
                label="Last Name"
                id="lastName"
                placeholder="Last name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={(e) =>
                  handleInputChange('lastName', e.target.value)
                }
                error={errors.lastName}
                required
              />
            </div>

            {/* University Email */}
            <Input
              label="University Email"
              id="email"
              inputType="email"
              placeholder="ictxxxxx@std.uwu.ac.lk"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                handleInputChange('email', e.target.value)
              }
              error={errors.email}
              required
            />

            {/* Password and Confirm Password */}
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
                    onClick={(e) => e.stopPropagation()}
                    className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary-hover"
                >
                    Terms and Conditions
                </Link>{' '}
                and{' '}
                <Link
                    to="/privacy"
                    onClick={(e) => e.stopPropagation()}
                    className="font-medium text-primary underline underline-offset-2 transition-colors hover:text-primary-hover"
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

            {/* Submit */}
            <Button
              type="submit"
              className="w-full py-3"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>

          </form>

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

export default StudentRegistrationPage