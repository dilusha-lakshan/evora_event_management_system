import { useRef } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../../components/common/Card'
import { AcademicCapIcon } from '../../../components/icons/AcademicCapIcon'
import { VideoIcon } from '../../../components/icons/VideoIcon'

function RegistrationPage() {
  const studentIconRef = useRef(null)
  const providerIconRef = useRef(null)

  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-6 py-4 md:h-dvh md:overflow-hidden">
      <div className="w-full max-w-2xl">

        {/* Branding */}
        <div className="mb-5 text-center">
          <h1 className="text-3xl font-bold tracking-widest text-primary sm:text-4xl">
            EVORA
          </h1>

          <p className="mt-1.5 text-sm text-secondary-text">
            Your university event experience starts here.
          </p>
        </div>

        {/* Registration Card */}
        <Card className="p-6">
          <div className="mb-5 text-center">
            <h2 className="text-xl font-bold sm:text-2xl">
              CREATE AN ACCOUNT
            </h2>

            <p className="mt-1 text-sm text-secondary-text">
              Choose how you want to join Evora.
            </p>
          </div>

          {/* Clickable Role Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Student Account */}
            <Link
              to="/register/student"
              onMouseEnter={() => studentIconRef.current?.startAnimation()}
              onMouseLeave={() => studentIconRef.current?.stopAnimation()}
              className="group block text-left no-underline focus:outline-none"
            >
              <Card
                hover
                className="flex h-full flex-col justify-between p-5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-active:scale-[0.985]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <AcademicCapIcon
                      ref={studentIconRef}
                      size={32}
                      className="text-white"
                    />

                    
                  </div>

                  <h3 className="text-lg font-bold text-primary">
                    Student Account
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-secondary-text">
                    Join university events and organize events.
                  </p>
                </div>
              </Card>
            </Link>

            {/* Service Provider Account */}
            <Link
              to="/register/service-provider"
              onMouseEnter={() => providerIconRef.current?.startAnimation()}
              onMouseLeave={() => providerIconRef.current?.stopAnimation()}
              className="group block text-left no-underline focus:outline-none"
            >
              <Card
                hover
                className="flex h-full flex-col justify-between p-5 transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 group-active:scale-[0.985]"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <VideoIcon
                      ref={providerIconRef}
                      size={32}
                      className="text-white"
                    />

                    
                  </div>

                  <h3 className="text-lg font-bold text-primary">
                    Service Provider
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-secondary-text">
                    Offer your services, connect with event organizers.
                  </p>
                </div>
              </Card>
            </Link>

          </div>

          {/* Login Link */}
          <div className="mt-5 border-t border-border pt-4 text-center">
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
        <p className="mt-4 text-center text-xs text-secondary-text">
          EVORA // UNIVERSITY EVENT PLATFORM
        </p>

      </div>
    </div>
  )
}

export default RegistrationPage