import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Mail, ArrowLeft, RefreshCw } from 'lucide-react'
import Card from '../../../components/common/Card'
import Button from '../../../components/common/Button'

function EmailVerificationPage() {
  const location = useLocation()

  const email = location.state?.email || 'your registered email'

  const [cooldown, setCooldown] = useState(0)
  const [notice, setNotice] = useState('')

  useEffect(() => {
    if (cooldown <= 0) return

    const timer = setTimeout(() => {
      setCooldown((current) => current - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [cooldown])

  const handleResend = () => {
    if (cooldown > 0) return

    setCooldown(60)
    setNotice(
      'Email sending will be available after backend integration.',
    )
  }

  const handleCheckVerification = () => {
    setNotice(
      'Verification status checking will be available after backend integration.',
    )
  }

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-6">
      <div className="w-full max-w-md">
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-primary">
            EVORA
          </h1>
        </div>

        <Card className="p-6 sm:p-8">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center border border-primary/30 bg-primary/10">
              <Mail size={36} className="text-primary" />
            </div>
          </div>

          <div className="mb-6 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">
              VERIFY YOUR EMAIL
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-secondary-text">
              We've prepared the email verification process for your
              account. Once connected, you'll receive a verification
              link in your inbox.
            </p>
          </div>

          <div className="mb-6 border border-border bg-elevated p-4 text-center">
            <p className="mb-1 text-xs uppercase tracking-widest text-secondary-text">
              Registered Email
            </p>

            <p className="break-all text-sm font-bold text-main-text">
              {email}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Button
                size={14}
                className="w-full whitespace-nowrap px-2 py-2.5 !text-[15px] tracking-wider"
                onClick={handleCheckVerification}
            >
                Check Status
            </Button>

            <Button
                size={14}
                variant="outline"
                className="w-full px-1 py-1 !text-[14px] leading-tight tracking-wider"
                disabled={cooldown > 0}
                onClick={handleResend}
            >
                <span className="text-left">
                {cooldown > 0 ? (
                    <>
                    Resend Available
                    <br />
                    in {cooldown}s
                    </>
                ) : (
                    <>
                    Resend Email
                    </>
                )}
                </span>
            </Button>
            </div>

          {notice && (
            <div
              className="mt-4 border border-primary/30 bg-primary/5 p-3 text-center text-xs leading-relaxed text-secondary-text"
              role="status"
            >
              {notice}
            </div>
          )}

          <div className="mt-6 border-t border-border pt-4">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2 text-sm text-secondary-text transition-colors hover:text-primary"
            >
              <ArrowLeft size={16} />
              Back to registration
            </Link>
          </div>
        </Card>

        <p className="mt-4 text-center text-xs text-secondary-text">
          EVORA // UNIVERSITY EVENT PLATFORM
        </p>
      </div>
    </div>
  )
}

export default EmailVerificationPage