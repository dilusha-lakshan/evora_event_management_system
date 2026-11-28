
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PublicLayout from '../layouts/PublicLayout'
import Home from '../pages/Home.jsx'
import NotFound from '../pages/NotFound.jsx'
import Unauthorized from '../pages/Unauthorized.jsx'
import LoginPage from '../features/auth/pages/LoginPage'
import RegistrationPage from '../features/auth/pages/RegistrationPage'
import StudentRegistrationPage from '../features/auth/pages/StudentRegistrationPage'
import ServiceProviderRegistrationPage from '../features/auth/pages/ServiceProviderRegistrationPage'
import ForgotPasswordPage from '../features/auth/pages/ForgotPasswordPage'
import TermsPage from '../pages/TermsPage'
import PrivacyPage from '../pages/PrivacyPage'
import EmailVerificationPage from '../features/auth/pages/EmailVerificationPage'

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
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
