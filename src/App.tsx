import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import {Dashboard} from  './pages/Dashboard'
import { Layout } from './components/Layout'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import NotFound from './pages/NotFound'
import { ProtectedRoute } from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* 🛡️ SECURITY SHIELD: Everything wrapped inside here requires authentication */}
              <Route element={<ProtectedRoute />}>
                  {/* Layout routes serve nested page content views */}
                  <Route element={<Layout />}>
                    <Route path='/' element={<Dashboard/>} />
                  </Route>
              </Route>

              {/* Auth pages standalone views */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />

              {/* Global Fallback Route */}
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
