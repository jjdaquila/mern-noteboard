import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <div className="pt-5 pl-5">
      <div className="mx-auto w-full pr-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl text-primary"> </h3>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-[250px]"
            />
            <Link to={'/login'} className="btn btn-ghost">Sign in</Link>
            <button className="text-green-500">🔔</button>
            <button className="text-green-500">⚙️</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
