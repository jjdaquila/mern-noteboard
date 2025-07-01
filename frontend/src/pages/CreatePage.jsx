import React, { useState } from 'react'
import Navbar from '../components/Navbar'

const CreatePage = () => {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const [loading,setLoading] = useState(false)

  return (
    <div>
      create
    </div>
  )
}

export default CreatePage
