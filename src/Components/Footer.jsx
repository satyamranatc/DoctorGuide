import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            The Best Doctors
          </h2>
          <p className="text-gray-500 mt-2">
            Caring for your health, always.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            © 2023 The Best Doctors. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:text-right">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Follow Us
          </h2>

          <div className="flex md:justify-end gap-4">
            <a
              href="#"
              className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <Twitter size={20} />
            </a>

            <a
              href="#"
              className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
