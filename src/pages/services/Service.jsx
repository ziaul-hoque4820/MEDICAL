import React from 'react'
import ServiceCard from './ServiceCard'
import Contact from '../../components/Contact'
import ServiceBannerSection from './ServiceBannerSection'

function Service() {
    return (
        <div>
            <ServiceBannerSection />
            <div className='flex items-center justify-center bg-gray-100'>
                <ServiceCard />
            </div>

            <Contact />
        </div>
    )
}

export default Service