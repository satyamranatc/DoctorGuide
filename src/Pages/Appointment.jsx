import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function Appointment() {

  let [loding,setLoding] = useState(false)
  let [appointmentData,setAppointmentData] = useState({
    name: "",
    age: "",
    gender: "",
    description: "",
    doctor: ""
  })

  const doctorsList = useSelector((state) => state.doctorsList)


  async function findDoctor() 
  {
    let Res = await askAi(appointmentData.description,appointmentData.age)
    
    
  }


  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        Book an Appointment
      </h1>
      <p className="text-gray-500 mt-2">
        Fill in your details to consult a specialist
      </p>

      <hr className="my-6" />

      {/* Form Card */}
      <div className="bg-white border rounded-xl shadow-sm p-8">

        <form className="space-y-6">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              onChange={(e) => setAppointmentData({...appointmentData,name:e.target.value})}
              type="text"
              placeholder="Enter your name"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Age
            </label>
            <input
              onChange={(e) => setAppointmentData({...appointmentData,age:e.target.value})}
              type="number"
              placeholder="Enter your age"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender
            </label>

            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="radio" name="gender" className="accent-blue-600" />
                Male
              </label>

              <label className="flex items-center gap-2 text-gray-600">
                <input type="radio" name="gender" className="accent-blue-600" />
                Female
              </label>

              <label className="flex items-center gap-2 text-gray-600">
                <input type="radio" name="gender" className="accent-blue-600" />
                Others
              </label>
            </div>
          </div>

          {/* Disease */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe Your Problem
            </label>
            <textarea
              onChange={(e) => setAppointmentData({...appointmentData,description:e.target.value})}
              rows="4"
              placeholder="Describe your disease or symptoms"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Doctor Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Doctor
            </label>
            <select
              className="w-full border rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select a doctor</option>
              {
                doctorsList.doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name} — {doctor.speciality}
                  </option>
                ))
              }
            </select>
          </div>

          <div>
            <button onClick={findDoctor}  disabled = {loding} className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' type='button'>
              {
                loding? "Loding...": "Find Me a Doctor"
              }
            </button>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition "

            >
              Book Appointment
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}