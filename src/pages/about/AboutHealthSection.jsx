import React from 'react'
import { FaHeartCircleCheck } from "react-icons/fa6";

function AboutHealthSection() {
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-4">
                {/* Service Menu */}
                <div className="lg:col-span-5 bg-[#FCFEFE] border-violet-900 border-[1px] p-4 text-center">
                <img
                src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="h-full w-full object-cover"
              />
                </div>

                {/* Main Content */}
                <div className="lg:col-span-7 p-4">
                    <h3 className="text-2xl font-bold mt-6 text-blue-500">Welcome to Hospital name. </h3>
                    <h2 className="text-4xl pt-5 font-bold text-blue-800">Best Care for Your Good Health</h2>
                    <div className="flex flex-wrap lg:flex-nowrap gap-6 mt-9">
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Passion for Healing</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">All our best</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Legacy of Excellence</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Always Caring</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Believe in Us</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">5-Star Care</span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">A Passion for Healing</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">All our best</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <FaHeartCircleCheck className="text-[20px] text-blue-900" />
                                <span className="ml-3">Believe in Us</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 text-justify">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quasi animi deserunt deleniti quo! Voluptatibus impedit nemo quaerat!</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel ex enim optio, consequatur natus autem veniam nesciunt quae deleniti itaque architecto eos.</p>
                        <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum hic voluptas sit repellendus officiis, vitae.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutHealthSection