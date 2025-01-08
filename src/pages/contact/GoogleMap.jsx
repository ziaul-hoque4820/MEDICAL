import React from 'react'

function GoogleMap() {
    return (
        <div className="container mx-auto bg-gray-100 p-5">
            <div className="w-full h-[500px] border-4 border-blue-500 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9020090196176!2d90.38913731541797!3d23.750884384589125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86ae2e0bb51%3A0xf3f0d6f7c28e3c4e!2sDhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                    className="w-full h-full border-none"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}

export default GoogleMap