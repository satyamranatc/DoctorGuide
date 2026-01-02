import { createSlice } from "@reduxjs/toolkit";

let DoctorSlicer = createSlice({
    name: "doctors",
    initialState: {
     doctors: [
  {
    id: 101,
    name: "Dr. Rahul Mehta",
    specialization: "Cardiologist",
    desc: "Senior cardiologist with 12+ years of experience in treating heart diseases, hypertension, and cardiac emergencies. Expert in ECG, angiography, and preventive heart care.",
    location: "New York",
    rating: 4.7,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 800
  },
  {
    id: 102,
    name: "Dr. Emily Carter",
    specialization: "Dermatologist",
    desc: "Experienced dermatologist specializing in acne, skin allergies, cosmetic dermatology, and laser treatments. Known for patient-friendly consultations.",
    location: "Los Angeles",
    rating: 4.6,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 600
  },
  {
    id: 103,
    name: "Dr. Arjun Verma",
    specialization: "Neurologist",
    desc: "Neurologist with expertise in migraine, epilepsy, stroke management, and neurodegenerative disorders. Over a decade of clinical experience.",
    location: "Chicago",
    rating: 4.8,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 900
  },
  {
    id: 104,
    name: "Dr. Sophia Williams",
    specialization: "Pediatrician",
    desc: "Child specialist focused on newborn care, child nutrition, vaccinations, and childhood illnesses. Trusted by parents for compassionate care.",
    location: "San Francisco",
    rating: 4.5,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 500
  },
  {
    id: 105,
    name: "Dr. Vikram Singh",
    specialization: "Orthopedist",
    desc: "Orthopedic surgeon specializing in joint pain, fractures, sports injuries, and arthritis treatment with both surgical and non-surgical approaches.",
    location: "Houston",
    rating: 4.6,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 750
  },
  {
    id: 106,
    name: "Dr. Olivia Brown",
    specialization: "Gynecologist",
    desc: "Gynecologist and women’s health expert dealing with pregnancy care, menstrual disorders, infertility, and hormonal issues.",
    location: "Seattle",
    rating: 4.7,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 700
  },
  {
    id: 107,
    name: "Dr. Aman Khurana",
    specialization: "Oncologist",
    desc: "Medical oncologist with extensive experience in cancer diagnosis, chemotherapy planning, and patient-centered long-term care.",
    location: "Boston",
    rating: 4.9,
    image: "https://pngimg.com/d/doctor_PNG16019.png",
    fees: 1000
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