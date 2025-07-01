import React, { useEffect, useState } from 'react'
import RateLimitedUI from '../components/RateLimitedUI'
import axios from 'axios'
import toast from 'react-hot-toast'
import NoteCard from '../components/NoteCard'
import NoteModal from '../components/noteModal'

function NoteMenu() {
  const [isRateLimited, setIsRateLimited] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

  // ✅ Fetch Notes
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/notes")
        setNotes(res.data)
        setIsRateLimited(false)
      } catch (error) {
        if (error.response?.status === 429) {
          setIsRateLimited(true)
        } else {
          toast.error("Failed to load notes")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNotes()
  }, [])

  // ✅ Delete Note Handler
  const handleDeleteNote = (id) => {
    setNotes(prevNotes => prevNotes.filter(note => note._id !== id))
  }

  // ✅ Update Note Handler
  const handleUpdateNote = (updatedNote) => {
    setNotes(prevNotes =>
      prevNotes.map(note =>
        note._id === updatedNote._id ? updatedNote : note
      )
    )
  }

  return (
    <div>
      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-8xl mx-auto p-4 mt-6'>
        {/* Create Button */}
        <div className="mb-6 flex justify-end">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
            + New Note
          </button>
        </div>

        {/* Loading State */}
        {loading && <div className='text-center text-primary py-10'>Loading notes...</div>}

        {/* Notes Grid */}
        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map(note => (
              <NoteCard
                key={note._id}
                note={note}
                onDelete={handleDeleteNote}
                onUpdate={handleUpdateNote}
              />
            ))}
          </div>
        )}
      </div>

      {/* Create Modal */}
      {showModal && (
        <NoteModal
          setNotes={setNotes}
          toast={toast}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}

export default NoteMenu
