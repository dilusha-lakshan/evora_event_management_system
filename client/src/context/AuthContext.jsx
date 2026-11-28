
import { createContext, useState, useMemo } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)

  const value = useMemo(() => ({
    user,
    loading,
    isAuthenticated: !!user,
    setUser,
    setLoading,
    logout: () => setUser(null),
  }), [user, loading])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
