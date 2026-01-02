import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function Appointment() {

    let doctorsList = useSelector((state) => state.doctorsList.doctors);
    console.log(doctorsList)
    let {id} = useParams();

    let doctor = doctorsList.find((doctor) => doctor.id == id);

  return (
    <div>

        <img src = {doctor.image}/>
        <h1>{doctor.name}</h1>
        <p>{doctor.specialization}</p>
        <p>{doctor.desc}</p>
        <p>{doctor.location}</p>
        <p>{doctor.fee}</p>
        <p>{doctor.rating}</p>
      
    </div>
  )
}
