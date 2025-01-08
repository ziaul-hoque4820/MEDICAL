import React from 'react'
import AboutBannerSection from './AboutBannerSection'
import AboutHealthSection from './AboutHealthSection'
import QuoteSlider from '../../components/QuoteSlider'
import Doctors from '../../components/Doctors'
import News from '../../components/News'
import Contact from '../../components/Contact'

function About() {
    return (
        <section>
                <AboutBannerSection />
                <AboutHealthSection />
                <QuoteSlider />
                <Doctors />
                <News />
                <Contact />
        </section>
    )
}

export default About