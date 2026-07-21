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
              <Route element={<Layout />}>

              {/* 🔓 Public Routes (Header shows Login / Register) */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              
              {/* 🛡️ Protected Routes (Header shows Dashboard / Logout) */}
                <Route element={<ProtectedRoute />}>
                  {/* Layout routes serve nested page content views */}
                    <Route path='/' element={<Dashboard/>} />
                </Route>
              {/* Global Fallback Route */}
              <Route path='*' element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
