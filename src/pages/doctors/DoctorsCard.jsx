import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function DoctorsCard() {
    const doctors = [
        {
            name: "Hima-Wari Ujumaki",
            title: "Neurology",
            image: "https://images.pexels.com/photos/15752232/pexels-photo-15752232/free-photo-of-portrait-of-doctor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Rashid Khan",
            title: "Cardiology",
            image: "https://images.pexels.com/photos/5996692/pexels-photo-5996692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Amina Sultana",
            title: "Pediatrics",
            image: "https://images.pexels.com/photos/5452295/pexels-photo-5452295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Shakib Ahmed",
            title: "Orthopedics",
            image: "https://images.pexels.com/photos/5998474/pexels-photo-5998474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Nazia Khanum",
            title: "Dermatology",
            image: "https://images.pexels.com/photos/7089394/pexels-photo-7089394.jpeg"
        },
        {
            name: "Hassan Ali",
            title: "Gastroenterology",
            image: "https://images.pexels.com/photos/15962799/pexels-photo-15962799/free-photo-of-doctor-in-scrubs-with-a-stethoscope-around-his-neck.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Misha Tariq",
            title: "Obstetrics & Gynecology",
            image: "https://images.pexels.com/photos/8460094/pexels-photo-8460094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            name: "Farhan Akram",
            title: "General Medicine",
            image: "https://images.pexels.com/photos/27298085/pexels-photo-27298085/free-photo-of-portrait-clinic-doctor-healthcare.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <div className='container mx-auto p-3'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {doctors.map((item, index) => (
                    <div key={index} className='border flex flex-col items-center p-4'>
                        <img className='w-[350px] h-[350px] object-cover mb-4' src={item.image} alt={item.name} />
                        <h3 className='text-center text-xl font-semibold py-2'>{item.name}</h3>
                        <p className='text-center text-zinc-400'>{item.title}</p>
                        <div className='flex items-center gap-5 justify-center p-4'>
                            <FaLinkedin className='w-10 h-10 text-blue-600' />
                            <FaFacebookSquare className='w-10 h-10 text-blue-700' />
                            <FaSquareInstagram className='w-10 h-10 text-pink-600' />
                        </div>
                        <button className='w-full py-2 bg-blue-800 text-white'>View Profile</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DoctorsCard
