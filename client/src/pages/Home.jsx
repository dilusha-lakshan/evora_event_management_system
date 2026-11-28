import Button from '../components/common/Button'
import Card from '../components/common/Card'
import Input from '../components/common/Input'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-xl space-y-8">

        <h1 className="text-4xl font-bold text-primary">
          Be Ready to Host Your Next Event
        </h1>

        <h2 className="text-lg text-secondary">
          Comming Soon
          </h2>

          <Link
                to="/register"
                className="font-bold text-primary transition-colors hover:text-primary-hover"
                >
                Create an account
              </Link>

      </div>
    </div>
  )
}

export default Home