import AppLayout from '@/layouts/AppLayout'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import TestComponent1 from '@/pages/TestComponent1.tsx'
import TestComponent2 from '@/pages/TestComponent2.tsx'
import TestComponent3 from '@/pages/TestComponent3.tsx'
import TestComponent4 from '@/pages/TestComponent4.tsx'
import { isAuthenticated } from '@/lib/auth'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/route1" element={<TestComponent1 />} />
          <Route path="/route2" element={<TestComponent2 />} />
          <Route path="/route3" element={<TestComponent3 />} />
          <Route path="/route4" element={<TestComponent4 />} />
        </Route>
        <Route path="*" element={<Navigate to={isAuthenticated() ? '/' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
