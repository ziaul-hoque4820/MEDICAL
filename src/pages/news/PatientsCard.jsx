import React from 'react'  
import { GoDiscussionOutdated } from "react-icons/go";  
import { IoPerson } from "react-icons/io5";  
import { IoEyeSharp } from "react-icons/io5";  
import { LuHeartHandshake } from "react-icons/lu";  

function PatientsCard() {  
    return (  
        <div className='border p-5 my-5 shadow-lg rounded-md md:my-8 md:flex md:flex-col md:items-center lg:max-w-2xl mx-auto'>  
            {/* Image */}  
            <img   
                className='w-full h-64 object-cover rounded-md md:h-80 lg:h-96'   
                src="https://images.pexels.com/photos/8770730/pexels-photo-8770730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"   
                alt="Patients First"   
            />  

            {/* Icon Section */}  
            <div className='flex flex-col gap-3 p-3 text-zinc-400 sm:flex-row sm:justify-between sm:items-center'>  
                {/* Date and Time */}  
                <div className='flex items-center gap-2'>  
                    <GoDiscussionOutdated />  
                    <p>Monday 05, September 2021</p>  
                </div>  

                {/* Author */}  
                <div className='flex items-center gap-2'>  
                    <IoPerson />  
                    <span>By Author</span>  
                </div>  

                {/* Views */}  
                <div className='flex items-center gap-2'>  
                    <IoEyeSharp />  
                    <span>68</span>  
                </div>  

                {/* Likes */}  
                <div className='flex items-center gap-2'>  
                    <LuHeartHandshake />  
                    <span>86</span>  
                </div>  
            </div>  

            {/* Title & Description */}  
            <div className="text-center lg:text-left">  
                <h2 className='text-xl md:text-2xl font-bold py-3'>A passion for putting patients first</h2>  
                <p className='text-sm md:text-base leading-6 text-gray-600'>  
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus molestias error laborum consequatur commodi voluptatibus cum, modi eveniet quidem neque sunt vitae in debitis quisquam, nisi illum quam expedita aspernatur.  
                </p>  
            </div>  

            {/* Button */}  
            <div className="mt-5 flex justify-center lg:justify-start">  
                <button className='px-6 py-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-600 transition-all'>  
                    Read More  
                </button>  
            </div>  
        </div>  
    )  
}  

export default PatientsCard;  