import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HomeIcon, ClipboardClockIcon, UserIcon } from 'lucide-react'

export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo Section */}
        <div id="LogoSection">
          <h2 className="text-2xl font-bold text-blue-600">
            Doctors Guide
          </h2>
          <p className="text-sm text-gray-500">
            Find Your Doctor
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium transition ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <HomeIcon size={20} />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `flex items-center gap-2 font-medium transition ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`
              }
            >
              <ClipboardClockIcon size={20} />
              <span>Doctors</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/appointment"
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
                }`
              }
            >
              <UserIcon size={20} />
              <span>Book Appointment</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}