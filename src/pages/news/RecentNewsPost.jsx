import React from 'react';
import PatientsCard from './PatientsCard';
import NewsSearch from './NewsSearch';
import RecentImportantPost from './RecentImportantPost';
import NewsCategories from './NewsCategories';

function RecentNewsPost() {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4'>
            <div className='space-y-4'>
                {[...Array(6)].map((_, index) => (
                    <PatientsCard key={index} />
                ))}
            </div>
            <div className='my-5 p-4 border flex flex-col space-y-6'>
                <NewsSearch />
                <RecentImportantPost />
                <NewsCategories />
            </div>
        </div>
    );
}

export default RecentNewsPost;