import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios";

const NoteModal = ({ setNotes, onClose }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      const res = await api.post("/notes", { title, content });
      setNotes((prev) => [res.data, ...prev]);
      toast.success("Note created successfully!");
      onClose(); // Close the modal
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error creating note", error);
      if (error.response?.status === 429) {
        toast.error("Slow down! You're creating notes too fast", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Failed to create note");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="modal modal-open"
      onClick={(e) => {
        if (e.target.classList.contains("modal")) {
          onClose(); // Close modal when clicking outside
        }
      }}
    >
      <div className="modal-box max-w-xl">
        <h2 className="font-bold text-xl mb-4">Create New Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Note Title"
              className="input input-bordered"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Content</span>
            </label>
            <textarea
              placeholder="Write your note here..."
              className="textarea textarea-bordered h-32"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>

          <div className="modal-action">
            <button type="button" className="btn" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? "Creating..." : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;
