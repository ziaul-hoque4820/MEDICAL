import React from 'react'
import NewsBannerSection from './NewsBannerSection'
import RecentNewsPost from './RecentNewsPost'
import Contact from '../../components/Contact'

function News() {
    return (
        <section>
            <NewsBannerSection />
            <RecentNewsPost />
            <Contact />
        </section>
    )
}

export default News