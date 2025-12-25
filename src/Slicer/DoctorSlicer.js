import { createSlice } from "@reduxjs/toolkit";

let DoctorSlicer = createSlice({
    name: "doctors",
    initialState: {
        doctors: [
            {
                id:101,
                name:"Dr. John Doe",
                specialization:"Cardiologist",
                desc:"I am a cardiologist, I am an experienced cardiologist. I have been practicing for over 10 years and have been able to treat a wide range of heart conditions.",
                location:"New York",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:102,
                name:"Dr. Jane Smith",
                specialization:"Dermatologist",
                desc:"I am a dermatologist, I am an experienced dermatologist. I have been practicing for over 10 years and have been able to treat a wide range of skin conditions.",
                location:"Los Angeles",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:103,
                name:"Dr. John Doe",
                specialization:"Neurologist",
                desc:"I am a neurologist, I am an experienced neurologist. I have been practicing for over 10 years and have been able to treat a wide range of neurological conditions.",
                location:"New York",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:104,
                name:"Dr. Jane Smith",
                specialization:"Pediatrician",
                desc:"I am a pediatrician, I am an experienced pediatrician. I have been practicing for over 10 years and have been able to treat a wide range of pediatric conditions.",
                location:"Los Angeles",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:105,
                name:"Dr. John Doe",
                specialization:"Orthopedist",
                desc:"I am an orthopedist, I am an experienced orthopedist. I have been practicing for over 10 years and have been able to treat a wide range of orthopedic conditions.",
                location:"New York",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:106,
                name:"Dr. Jane Smith",
                specialization:"Gynecologist",
                desc:"I am a gynecologist, I am an experienced gynecologist. I have been practicing for over 10 years and have been able to treat a wide range of gynecological conditions.",
                location:"Los Angeles",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            },
            {
                id:107,
                name:"Dr. John Doe",
                specialization:"Oncologist",
                desc:"I am an oncologist, I am an experienced oncologist. I have been practicing for over 10 years and have been able to treat a wide range of oncological conditions.",
                location:"New York",
                rating:4.5,
                image:"https://pngimg.com/d/doctor_PNG16019.png",
                fees:500
            }
        ]
    },
    reducers: {
        setDoctors: (state, action) => {
            state.doctors.push(action.payload)
        }
    }
  
})

export default DoctorSlicer.reducer;

export const {setDoctors} = DoctorSlicer.actions