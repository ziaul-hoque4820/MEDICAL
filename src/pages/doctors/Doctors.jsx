import React from 'react'
import DoctorBannerSection from './DoctorBannerSection'
import DoctorsCard from './DoctorsCard'
import QuoteSlider from '../../components/QuoteSlider'
import News from '../../components/News'
import Contact from '../../components/Contact'

function Doctors() {
    return (
        <section>
            <DoctorBannerSection />

            <DoctorsCard />

            <QuoteSlider />

            <News />

            <Contact />

        </section>
    )
}

export default Doctors