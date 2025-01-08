import React from 'react'

function DoctorBannerSection() {
    return (
        <section className="container mx-auto">
            <div
                className="h-48"
                style={{
                    backgroundImage: `url(https://images.pexels.com/photos/3279203/pexels-photo-3279203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className=" px-5">
                    <h1 className="text-5xl pt-14 text-white font-bold font-yeseva ">Our Doctors</h1>
                </div>
            </div>
        </section>
    )
}

export default DoctorBannerSection