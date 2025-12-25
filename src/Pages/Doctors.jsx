import React from 'react'
import { useSelector } from 'react-redux'
import { MapPin, Star } from 'lucide-react'

export default function Doctors() {

  const doctorsList = useSelector((state) => state.doctorsList)

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        Our Doctors
      </h1>
      <p className="text-gray-500 mt-2">
        Book appointments with trusted specialists
      </p>

      <hr className="my-6" />

      {/* Doctors Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          doctorsList.doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden"
            >

              {/* Doctor Image */}
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-full h-56 object-cover"
              />

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {doctor.name}
                </h2>

                <p className="text-blue-600 font-medium mt-1">
                  {doctor.speciality}
                </p>

                <p className="text-gray-600 text-sm mt-2">
                  {doctor.desc}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
                  <MapPin size={16} />
                  {doctor.location}
                </div>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={18} fill="currentColor" />
                    <span className="font-medium text-gray-700">
                      {doctor.rating}
                    </span>
                  </div>

                  <p className="text-gray-800 font-semibold">
                    ₹{doctor.fees}
                  </p>
                </div>

                {/* Button */}
                <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}
