import React from 'react'

function NewsCategories() {
    const catNews = [
        {title: "Surgery", number: 3},
        {title: "Health Care", number: 9},
        {title: "Medical", number: 10},
        {title: "Dental", number: 15},
        {title: "Professional", number: 5}
    ]
    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-zinc-700 my-5'>Categories</h2>
            {catNews.map((item, index) => (
                    <div key={index} className='flex items-center justify-around mt-3'>
                    <h2 className='text-xl font-semibold text-zinc-500 '>{item.title}</h2>
                    <p className='w-8 h-8 bg-blue-700 text-center text-white rounded-full'>{item.number}</p>
                </div>
            ))}
        </div>
    )
}

export default NewsCategories