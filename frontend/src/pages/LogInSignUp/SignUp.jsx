import React, { useState } from 'react'
import loginImage from '../../img/login.gif'
import DiscordIcon from '../../img/icon/discord.png'
import TwitterIcon from '../../img/icon/twitter.png'
import RedditIcon from '../../img/icon/reddit.webp'
import FacebookIcon from '../../img/icon/fb_icoo.webp'
import { Link } from 'react-router'
import axios from 'axios'

function SignUp() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setError('')
    setSuccess('')

    // ✅ Full backend URL (corrected)
    axios.post('http://localhost:5001/api/users/register', {
      username,
      email,
      password
    })
      .then(res => {
        console.log('Registration successful:', res.data)
        setSuccess('Registration successful!')
        // Optionally reset form
        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
      })
      .catch(err => {
        console.error('Error during registration:', err)
        setError('Registration failed. Please try again.')
      })
  }

  return (
    <div className="min-h-screen bg-base-400 flex items-center justify-center px-4 py-8">
      <div className="bg-stone-800 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">

        {/* Image Section */}
        <div className="hidden lg:block w-1/2">
          <img
            src={loginImage}
            alt="Sign Up"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
              CREATE ACCOUNT
            </h2>

            <form onSubmit={handleSubmit}>
              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
              {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

              <div className="mb-4">
                <label className="block mb-1 ml-3 font-semibold text-base-content">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter username"
                  className="input input-bordered w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 ml-3 font-semibold text-base-content">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block mb-1 ml-3 font-semibold text-base-content">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block mb-1 ml-3 font-semibold text-base-content">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="input input-bordered w-full"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-full text-lg mb-4">
                Sign Up
              </button>

              <div className="flex items-center my-4">
                <hr className="flex-grow border-base-content/20" />
                <span className="mx-2 text-base-content/60 text-sm">or</span>
                <hr className="flex-grow border-base-content/20" />
              </div>

              <button className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 mb-6">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
                Sign up with Google
              </button>

              <p className="text-center text-sm text-base-content/70">
                Already have an account?{' '}
                <Link to="/login" className="text-primary hover:underline">
                  Log In
                </Link>
              </p>
            </form>

            <div className="flex justify-center gap-4 mt-6">
              <img src={DiscordIcon} alt="Discord" className="w-6 sm:w-8" />
              <img src={FacebookIcon} alt="Facebook" className="w-6 sm:w-8" />
              <img src={TwitterIcon} alt="Twitter" className="w-6 sm:w-8" />
              <img src={RedditIcon} alt="Reddit" className="w-6 sm:w-8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
