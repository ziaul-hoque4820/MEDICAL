import React from 'react'

function ContactBannerSection() {
    return (
        <section className="container mx-auto">
            <div
                className="h-48"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className=" px-5">
                    <h1 className="text-5xl pt-14 text-white font-bold font-yeseva ">Our Contacts</h1>
                </div>
            </div>
        </section>
    )
}

export default ContactBannerSection