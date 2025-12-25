import React from 'react'
import { Search, ShieldCheck, Clock } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Find the <span className="text-blue-600">Best Doctors</span><br />
              Near You
            </h1>

            <p className="text-gray-600 mt-6 text-lg">
              Book appointments with trusted doctors and specialists in just a few clicks.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Find Doctors
              </button>

              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
                Book Appointment
              </button>
            </div>
          </div>

          {/* Banner Image */}
          <div className="hidden md:block">
            <img
              src="https://png.pngtree.com/png-clipart/20230927/original/pngtree-photo-men-doctor-physician-chest-smiling-png-image_13143575.png"
              alt="Doctor"
              className="rounded-xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="p-8 rounded-xl border hover:shadow-lg transition">
              <Search className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">
                Easy Search
              </h3>
              <p className="text-gray-600">
                Find doctors by specialty, location, and availability.
              </p>
            </div>

            <div className="p-8 rounded-xl border hover:shadow-lg transition">
              <ShieldCheck className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">
                Trusted Professionals
              </h3>
              <p className="text-gray-600">
                Verified and experienced doctors you can rely on.
              </p>
            </div>

            <div className="p-8 rounded-xl border hover:shadow-lg transition">
              <Clock className="text-blue-600 mb-4" size={36} />
              <h3 className="text-xl font-semibold mb-2">
                Quick Appointments
              </h3>
              <p className="text-gray-600">
                Book appointments in seconds without waiting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-gray-800">
            What Patients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “Very easy to book an appointment. The doctor was extremely professional.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">
                — Rahul Sharma
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “Best platform to find trusted doctors near my area.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">
                — Priya Verma
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-600">
                “Quick booking and great experience overall.”
              </p>
              <h4 className="mt-4 font-semibold text-gray-800">
                — Amit Singh
              </h4>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}