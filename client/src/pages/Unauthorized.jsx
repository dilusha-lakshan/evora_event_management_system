
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

function Unauthorized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="text-5xl font-bold text-primary">403</h1>

      <p className="mt-4 text-secondary-text">
        You don't have permission to access this page.
      </p>

      <Link to="/" className="mt-8">
        <Button>Back to Home</Button>
      </Link>
    </div>
  )
}

export default Unauthorized
