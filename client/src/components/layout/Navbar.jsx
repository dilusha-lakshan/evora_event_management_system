
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Explore Events', to: '/events' },
  { label: 'Service Providers', to: '/providers' },
  { label: 'About Us', to: '/about' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const linkStyles = ({ isActive }) =>
    [
      'relative py-2 text-sm transition-colors duration-200',
      isActive
        ? 'text-primary'
        : 'text-secondary-text hover:text-main-text',
    ].join(' ')

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold tracking-widest text-primary no-underline"
        >
          EVORA<span className="text-main-text">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkStyles}
            >
              {({ isActive }) => (
                <>
                  {link.label}

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-indicator"
                      className="absolute -bottom-[1.15rem] left-0 h-[2px] w-full bg-primary"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/login"
            className="px-5 py-3 text-sm text-main-text no-underline transition-colors hover:text-primary"
          >
            Sign In
          </Link>

          <Link
            to="/register"
            className="group inline-flex items-center gap-2 border border-primary bg-primary px-5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-primary-hover"
          >
            Get Started
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center border border-border text-main-text transition-colors hover:border-primary hover:text-primary lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-6 py-5">

              <div className="flex flex-col">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      [
                        'border-b border-border py-4 text-sm no-underline transition-colors',
                        isActive
                          ? 'text-primary'
                          : 'text-secondary-text hover:text-main-text',
                      ].join(' ')
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="border border-border px-4 py-3 text-center text-sm text-main-text no-underline transition-colors hover:border-primary hover:text-primary"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="border border-primary bg-primary px-4 py-3 text-center text-sm font-bold text-white no-underline transition-colors hover:bg-primary-hover"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar
