import React, { useState, useEffect } from 'react'
import { Link } from 'react-router'
import { Menu, LayoutDashboard, NotebookPen } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')

    const handleChange = (e) => {
      if (e.matches) setIsOpen(false)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div className="relative">
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-stone-700 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <Menu size={24} />
      </button>

      <div
        className={`fixed z-40 h-auto min-h-[calc(100vh-2rem)] m-4
          bg-stone-800 w-[300px] p-4 md:rounded-2xl border-r border-base-content/10
          flex flex-col justify-between
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%+1rem)]'}
          md:translate-x-0 md:static md:block rounded-2xl
        `}
      >
        <div>
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight mb-8 text-right mr-9 md:text-center md:mr-0">
            NoteBoard
          </h1>

          <div className="flex flex-col gap-4">
            <Link to={'/'} className="btn btn-primary text-lg h-14 flex items-center justify-start gap-3">
              <LayoutDashboard size={20} />
              Dashboard
            </Link>
            <Link to={'/notemenu'} className="btn btn-primary text-lg h-14 flex items-center justify-start gap-3">
              <NotebookPen size={20} />
              Notes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
