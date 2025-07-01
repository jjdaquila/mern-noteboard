import React, { useState } from 'react'
import loginImage from '../../img/login.gif'
import DiscordIcon from '../../img/icon/discord.png'
import TwitterIcon from '../../img/icon/twitter.png'
import RedditIcon from '../../img/icon/reddit.webp'
import FacebookIcon from '../../img/icon/fb_icoo.webp'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

function LogIn() {
  const [identifier, setIdentifier] = useState('') // username or email
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!identifier || !password) {
      setError('Please fill in all fields')
      return
    }

    try {
      setError('')
      const res = await axios.post('http://localhost:5001/api/users/login', {
        identifier,
        password,
      })
      console.log('Login success:', res.data)
      // You can store token/res.data in localStorage or context
      navigate('/') // ✅ redirect after login
    } catch (err) {
      console.error('Login failed:', err)
      setError('Invalid credentials')
    }
  }

  return (
    <div className="min-h-screen bg-base-400 flex items-center justify-center px-4 py-8">
      <div className="bg-stone-800 rounded-2xl shadow-lg w-full max-w-6xl flex flex-col lg:flex-row overflow-hidden">

        {/* Form Section */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center items-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6">
              WELCOME
            </h2>

            <form onSubmit={handleLogin}>
              {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

              <div className="mb-4">
                <label className="block mb-1 ml-3 font-semibold text-base-content">
                  Username or Email
                </label>
                <input
                  type="text"
                  placeholder="Enter username or email"
                  className="input input-bordered w-full"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>

              <div className="mb-2">
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

              <div className="text-right mb-4">
                <a href="#" className="text-sm text-primary hover:underline">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-primary w-full text-lg mb-4">
                Sign In
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-base-content/20" />
              <span className="mx-2 text-base-content/60 text-sm">or</span>
              <hr className="flex-grow border-base-content/20" />
            </div>

            <button className="btn w-full bg-white text-black border border-gray-300 hover:bg-gray-100 mb-6">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5 mr-2" alt="Google" />
              Sign in with Google
            </button>

            <p className="text-center text-sm text-base-content/70">
              Are you new?{' '}
              <Link to="/register" className="text-primary hover:underline">
                Create an Account
              </Link>
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mt-6">
              <img src={DiscordIcon} alt="Discord" className="w-6 sm:w-8" />
              <img src={FacebookIcon} alt="Facebook" className="w-6 sm:w-8" />
              <img src={TwitterIcon} alt="Twitter" className="w-6 sm:w-8" />
              <img src={RedditIcon} alt="Reddit" className="w-6 sm:w-8" />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-1/2">
          <img
            src={loginImage}
            alt="Login"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default LogIn
