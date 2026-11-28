
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import Unauthorized from '../pages/Unauthorized.jsx'
import LoginPage from '../features/auth/pages/LoginPage'
import RegistrationPage from '../features/auth/pages/RegistrationPage'
import StudentRegistrationPage from '../features/auth/pages/StudentRegistrationPage'
import ServiceProviderRegistrationPage from '../features/auth/pages/ServiceProviderRegistrationPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/register/student" element={<StudentRegistrationPage />} />
          <Route path="/register/service-provider" element={<ServiceProviderRegistrationPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
