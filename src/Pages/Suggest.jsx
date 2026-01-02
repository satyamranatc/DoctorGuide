import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import askAi from "../Utils/AskAi";

export default function Suggest() {

  let [loding,setLoding] = useState(false)
  let [RecommendedDoctor,setRecommendedDoctor] = useState(null)
  const doctorsList = useSelector((state) => state.doctorsList)

  let doctorData = doctorsList.doctors.map((doctor) => {
    return {
      id: doctor.id,
      specialization: doctor.specialization,
      desc: doctor.desc,
    };
  });
  let doctorDataString = JSON.stringify(doctorData);

  async function handleSubmit(e) 
  {
    e.preventDefault();
    let data = {
      name: e.target.name.value,
      age: e.target.age.value,
      gender: e.target.gender.value,
      descOfProblem: e.target.descOfProblem.value,
    }
    console.log(data)
    
    let Res = await askAi(data,doctorDataString);

    setRecommendedDoctor(doctorsList.doctors.find((doctor) => doctor.id == Res.id));

    
  }


  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800">
        Suggest a Doctor
      </h1>
      <p className="text-gray-500 mt-2">
        Fill in your details to consult a specialist
      </p>

      <hr className="my-6" />

      {/* Form Card */}
      <div className="bg-white border rounded-xl shadow-sm p-8">

        <form className="space-y-6" onSubmit={handleSubmit} >

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              name = "name"
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
              type="number"
              name = "age"
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
                <input value={"Male"} type="radio" name="gender" className="accent-blue-600" />
                Male
              </label>

              <label className="flex items-center gap-2 text-gray-600">
                <input value={"Female"} type="radio" name="gender" className="accent-blue-600" />
                Female
              </label>

              <label className="flex items-center gap-2 text-gray-600">
                <input value={"Other"} type="radio" name="gender" className="accent-blue-600" />
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
              name = "descOfProblem"
              rows="4"
              placeholder="Describe your disease or symptoms"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Doctor Selection */}
          <div>
            {/* <label className="block text-sm font-medium text-gray-700 mb-1">
              Choose Doctor
            </label> */}
            {/* <select
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
            </select> */}
          </div>

          <div>
            <button disabled = {loding} className='bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed' type='submit'>
              {
                loding? "Loding...": "Find Me a Doctor"
              }
            </button>
          </div>

          {/* Submit */}
          {/* <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition "

            >
              Book Appointment
            </button>
          </div> */}

        </form>

        <div id="RecommendedDoctor">
          {
          RecommendedDoctor!=null?<>
          <h2 className="text-2xl font-bold text-gray-800 mt-8">
            Recommended Doctor
          </h2>
          <h2 className="text-gray-600 mt-2">
            {RecommendedDoctor.name} - {RecommendedDoctor.speciality}
          </h2>
          <p>{RecommendedDoctor.desc}</p>
          <p>{RecommendedDoctor.address}</p>
          <p>{RecommendedDoctor.rating}</p>
          <p>{RecommendedDoctor.fee}</p>
          <Link to = {`/appointment/${RecommendedDoctor.id}`} >
          <button>Book Appointment From This Doctor</button>
          </Link>

          </>:null
          }

        </div>

      </div>
    </div>
  )
}