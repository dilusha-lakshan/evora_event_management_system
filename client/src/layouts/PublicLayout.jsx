
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div className="min-h-screen bg-background text-main-text">
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PublicLayout
