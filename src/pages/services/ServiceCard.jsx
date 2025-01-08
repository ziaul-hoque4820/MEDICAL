import React, { useState } from 'react';  
import { FaClinicMedical } from 'react-icons/fa';  

const ServiceCard = () => {  
    const [hoveredIndex, setHoveredIndex] = useState(null);  

    // Array of services containing image, title, and description  
    const services = [  
        {  
            id: 1,  
            image: "https://images.pexels.com/photos/3376799/pexels-photo-3376799.jpeg?auto=compress&cs=tinysrgb&w=600",  
            title: "Free Checkup",  
            description: "Get a free checkup with our expert doctors. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
        {  
            id: 2,  
            image: "https://images.pexels.com/photos/3845121/pexels-photo-3845121.jpeg?auto=compress&cs=tinysrgb&w=600",  
            title: "Dental Care",  
            description: "Comprehensive dental care services for all ages. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
        {  
            id: 3,  
            image: "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=600",  
            title: "Eye Checkup",  
            description: "Advanced eye care solutions for healthy vision.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
        {  
            id: 4,  
            image: "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
            title: "Cardiology",  
            description: "Expert cardiology consultations and treatments.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
        {  
            id: 5,  
            image: "https://images.pexels.com/photos/7108427/pexels-photo-7108427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",  
            title: "Pediatric Care",  
            description: "Specialized care for children and newborns.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
        {  
            id: 6,  
            image: "https://images.pexels.com/photos/3985169/pexels-photo-3985169.jpeg?auto=compress&cs=tinysrgb&w=600",  
            title: "Physiotherapy",  
            description: "Effective physiotherapy sessions for pain relief. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam quisquam doloremque distinctio ipsa assumenda! Cumque esse debitis non est beatae?",  
        },  
    ];  

    return (  
        <div className="container mx-auto p-2 sm:p-1 md:p-2">  
            {/* Grid Layout for Responsive Cards */}  
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">  
                {services.map((service, index) => (  
                    <div  
                        key={service.id}  
                        className="relative w-full rounded-lg overflow-hidden shadow-md cursor-pointer group hover:shadow-lg transition-shadow duration-300"  
                        onMouseEnter={() => setHoveredIndex(index)}  
                        onMouseLeave={() => setHoveredIndex(null)}  
                    >  
                        {/* Image Section */}  
                        <div className="relative h-60 md:h-64 lg:h-72 w-full transition-all duration-500 ease-in-out">  
                            <img  
                                src={service.image}  
                                alt={service.title}  
                                className={`h-full w-full object-cover transition-all duration-500 ease-in-out   
                                ${hoveredIndex === index ? 'blur-sm brightness-75 scale-105' : 'blur-0 brightness-100 scale-100'}`}  
                            />  
                            {/* Icon Overlay */}  
                            <div  
                                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out   
                                ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}  
                            >  
                                <FaClinicMedical  
                                    className={`text-blue-500 ${hoveredIndex === index ? 'text-6xl animate-ping' : 'text-3xl'}`}  
                                />  
                            </div>  
                        </div>  

                        {/* Content Section */}  
                        <div className="p-4 md:p-6 bg-white text-center">  
                            <h3 className="text-lg md:text-xl font-semibold text-gray-900">{service.title}</h3>  
                            <p className="text-gray-700 mt-2 text-sm md:text-base line-clamp-3">{service.description}</p>  
                            <a href="#" className="text-blue-500 mt-4 inline-block font-medium hover:underline">  
                                Learn More →  
                            </a>  
                        </div>  
                    </div>  
                ))}  
            </div>  
        </div>  
    );  
};  

export default ServiceCard;  