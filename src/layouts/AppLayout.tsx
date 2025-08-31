import Navbar from '@/components/Navbar'
import { clearAuthToken, isAuthenticated } from '@/lib/auth'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

export default function AppLayout() {
  const navigate = useNavigate()
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />
  }
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar onLogout={() => { clearAuthToken(); navigate('/login') }} />
      <Outlet />
    </div>
  )
}


