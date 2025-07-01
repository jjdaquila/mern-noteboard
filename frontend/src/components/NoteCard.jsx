import React, { useState } from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { formatDate } from '../lib/utils'
import api from '../lib/axios'
import toast from 'react-hot-toast'

const NoteCard = ({ note, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(note.title)
  const [editedContent, setEditedContent] = useState(note.content)
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async (e) => {
    e.stopPropagation()
    const confirmDelete = confirm("Are you sure you want to delete this note?")
    if (!confirmDelete) return

    try {
      setIsDeleting(true)
      const res = await api.delete(`/notes/${note._id}`)
      if (res.status === 200 || res.status === 204) {
        toast.success("Note deleted")
        onDelete(note._id)
      } else {
        throw new Error("Unexpected response")
      }
    } catch (err) {
      console.error("Delete error:", err)
      toast.error("Failed to delete note")
    } finally {
      setIsDeleting(false)
    }
  }

  const handleUpdate = async () => {
    try {
      const res = await api.put(`/notes/${note._id}`, {
        title: editedTitle,
        content: editedContent,
      })
      if (res.status === 200) {
        toast.success("Note updated")
        setIsEditing(false)
        setIsModalOpen(false)
        // You may want to refresh notes in parent component here
      } else {
        throw new Error("Update failed")
      }
    } catch (error) {
      console.error("Update error:", error)
      toast.error("Failed to update note")
    }
  }

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-green-500 cursor-pointer"
      >
        <div className="card-body bg-stone-800 rounded-xl">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <button className="btn btn-ghost btn-xs" onClick={(e) => {
                e.stopPropagation()
                setIsEditing(true)
                setIsModalOpen(true)
              }}>
                <PenSquareIcon className="size-4" />
              </button>
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={handleDelete}
                disabled={isDeleting}
              >
                {isDeleting ? "..." : <Trash2Icon className="size-4" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="modal modal-open"
          onClick={(e) => {
            if (e.target.classList.contains('modal')) {
              setIsModalOpen(false)
              setIsEditing(false)
            }
          }}
        >
          <div className="modal-box">
            {isEditing ? (
              <>
                <h3 className="font-bold text-lg mb-2">Edit Note</h3>
                <input
                  className="input input-bordered w-full mb-3"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                />
                <div className="modal-action">
                  <button className="btn btn-outline" onClick={() => setIsEditing(false)}>Cancel</button>
                  <button className="btn btn-primary" onClick={handleUpdate}>Save</button>
                </div>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg mb-2">{note.title}</h3>
                <p className="text-sm text-base-content/60 mb-2">
                  {formatDate(new Date(note.createdAt))}
                </p>
                <p className="mb-4 whitespace-pre-line">{note.content}</p>
                <div className="modal-action">
                  <button className="btn" onClick={() => setIsModalOpen(false)}>Close</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default NoteCard
