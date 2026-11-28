
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>

      <p className="mt-4 text-secondary-text">
        Page not found.
      </p>

      <Link to="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}

export default NotFound
