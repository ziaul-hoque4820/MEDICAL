import React from 'react'

function AboutBannerSection() {
    return (
        <section className="container mx-auto">
            <div
                className="h-48"
                style={{
                    backgroundImage: `url(https://images.pexels.com/photos/7337922/pexels-photo-7337922.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className=" px-5">
                    <h1 className="text-5xl pt-14 text-white font-bold font-yeseva ">About Us</h1>
                </div>
            </div>
        </section>
    )
}

export default AboutBannerSection