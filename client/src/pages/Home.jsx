import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Button from '../components/common/Button'
import {
  ArrowRight,
  CalendarDays,
  Ticket,
  Users,
  Zap,
} from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-background text-main-text">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2 lg:py-32">

          {/* Hero Content */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-4 py-2">
              <span className="h-2 w-2 animate-pulse bg-primary" />

              <span className="text-xs tracking-[0.2em] text-primary">
                UNIVERSITY EVENT PLATFORM
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              YOUR EVENTS.
              <br />
              YOUR PEOPLE.
              <br />
              <span className="text-primary">
                YOUR MOMENT.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-8 text-secondary-text sm:text-base">
              Discover events, bring your ideas to life, and connect
              with the people who make every moment unforgettable.
              Everything your university events need, in one place.
            </p>

            {/* CTA */}
            {/* CTA */}
<div className="mt-10 flex flex-wrap gap-4">
  <Link to="/register" className="no-underline">
    <Button
      tabIndex={-1}
      glow
      className="gap-3 px-7 py-4 font-bold tracking-wider"
    >
      EXPLORE EVORA

      <ArrowRight
        size={18}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Button>
  </Link>

  <Link to="/login" className="no-underline">
    <Button
      tabIndex={-1}
      variant="outline"
      className="px-7 py-4 tracking-wider"
    >
      SIGN IN
    </Button>
  </Link>
</div>
            {/* Quick Features */}
            <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-8">

              <div>
                <div className="flex items-center gap-2 text-primary">
                  <CalendarDays size={18} />

                  <span className="text-xs tracking-wider">
                    DISCOVER
                  </span>
                </div>

                <p className="mt-2 text-xs text-secondary-text">
                  Find campus events
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Ticket size={18} />

                  <span className="text-xs tracking-wider">
                    REGISTER
                  </span>
                </div>

                <p className="mt-2 text-xs text-secondary-text">
                  Secure your tickets
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-primary">
                  <Users size={18} />

                  <span className="text-xs tracking-wider">
                    CONNECT
                  </span>
                </div>

                <p className="mt-2 text-xs text-secondary-text">
                  Join the community
                </p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">

            {/* Decorative border */}
            <div className="absolute -right-3 -top-3 h-full w-full border border-primary/30" />

            {/* Main Visual */}
            <div className="relative border border-border bg-surface p-6 sm:p-8">

              {/* Top label */}
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div className="flex items-center gap-2">
                  <Zap size={16} className="text-primary" />

                  <span className="text-xs tracking-widest text-primary">
                    EVENT EXPERIENCE
                  </span>
                </div>

                <span className="text-xs text-secondary-text">
                  EVORA / 001
                </span>
              </div>

              {/* Event visual */}
              <div className="relative mt-6 flex aspect-[4/3] items-center justify-center overflow-hidden border border-primary/20 bg-[#17111F]">

                {/* Decorative circles */}
                <div className="absolute h-64 w-64 rounded-full border border-primary/20" />

                <div className="absolute h-48 w-48 rounded-full border border-primary/30" />

                <div className="absolute h-32 w-32 rounded-full border border-primary/40" />

                <div className="absolute h-20 w-20 rounded-full bg-primary/20 blur-xl" />

                {/* Center */}
                <div className="relative z-10 text-center">
                  <p className="text-xs tracking-[0.4em] text-secondary-text">
                    MAKE IT
                  </p>

                  <h2 className="mt-3 text-4xl font-bold tracking-widest text-primary sm:text-5xl">
                    HAPPEN
                  </h2>

                  <div className="mx-auto mt-5 h-[1px] w-20 bg-primary" />

                  <p className="mt-5 text-xs tracking-[0.2em] text-main-text">
                    BE PART OF IT.
                  </p>
                </div>

                {/* Floating decorative blocks */}
                <div className="absolute left-6 top-6 border border-primary/40 bg-background/80 p-3">
                  <CalendarDays size={20} className="text-primary" />
                </div>

                <div className="absolute bottom-6 right-6 border border-primary/40 bg-background/80 p-3">
                  <Ticket size={20} className="text-primary" />
                </div>
              </div>

              {/* Bottom section */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs text-secondary-text">
                    ONE PLATFORM
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    ENDLESS EXPERIENCES
                  </p>
                </div>

                <div className="flex gap-1">
                  <span className="h-2 w-2 bg-primary" />
                  <span className="h-2 w-2 bg-primary/50" />
                  <span className="h-2 w-2 bg-primary/20" />
                </div>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-[1px] flex-1 bg-border" />

              <span className="text-xs tracking-widest text-secondary-text">
                MADE TO CELEBRATE
              </span>

              <div className="h-[1px] flex-1 bg-border" />
            </div>
          </div>
        </div>
      </section>

      {/* Temporary bottom placeholder */}
      <section className="border-t border-border px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-secondary-text">
            EVORA // UNIVERSITY EVENT PLATFORM
          </p>

          <p className="text-xs text-secondary-text">
            MADE TO CELEBRATE.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home