import React from 'react'

function ServiceBannerSection() {
    return (
        <section className="container mx-auto">
            <div
                className="h-48"
                style={{
                    backgroundImage: `url(https://images.pexels.com/photos/7088824/pexels-photo-7088824.jpeg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className=" px-5">
                    <h1 className="text-5xl pt-14 text-white font-bold font-yeseva ">Our Services</h1>
                </div>
            </div>
        </section>
    )
}

export default ServiceBannerSection