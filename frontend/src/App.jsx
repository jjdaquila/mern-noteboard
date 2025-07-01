import React from 'react'
import { Route, Routes, useLocation } from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import NoteMenu from './pages/NoteMenu'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import LogIn from './pages/LogInSignUp/LogIn'
import SignUp from './pages/LogInSignUp/SignUp'

const App = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register'

  return (
    <div data-theme="forest" className="min-h-screen">
      {isLoginPage ? (
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<SignUp />} /> 
        </Routes>
      ) : (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 mr-2 overflow-y-auto">
            <Navbar />
            <div className="p-6 h-[calc(100vh-90px)] overflow-y-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/notemenu" element={<NoteMenu />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/note/:id" element={<NoteDetailPage />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
