import React from 'react'
import ContactBannerSection from './ContactBannerSection'
import GoogleMap from './GoogleMap'
import Appointment from '../home/Appointment'
import News from '../../components/News'

function Contact() {
    return (
        <section>
            <ContactBannerSection />
            <GoogleMap />
            <Appointment />

            <News />
        </section>
    )
}

export default Contact