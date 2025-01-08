import React from 'react'

function RecentImportantPost() {
    const medicalNews = [
        {
            image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Monday 05, September 2021",
            title: "New Breakthrough in Cancer Treatment Shows Promising Results"
        },
        {
            image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Tuesday 14, September 2021",
            title: "WHO Approves New Vaccine for Malaria Prevention"
        },
        {
            image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Friday 22, October 2021",
            title: "Heart Disease Cases Decline with New Dietary Guidelines"
        },
        {
            image: "https://images.unsplash.com/photo-1564732122118-d9584c2b66dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Sunday 31, October 2021",
            title: "Researchers Develop AI-Powered Tool for Early Diabetes Detection"
        },
        {
            image: "https://images.unsplash.com/photo-1542868727-a1fc9a8a0ab8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Monday 08, November 2021",
            title: "Study Finds Link Between Sleep Patterns and Mental Health"
        },
        {
            image: "https://images.unsplash.com/photo-1542868727-5b8fcd21495e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.jpg",
            date: "Wednesday 17, November 2021",
            title: "COVID-19 Booster Shots Now Recommended for All Adults"
        },
        {
            image: "https://images.unsplash.com/photo-1576766125535-b04e15fd0273?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Friday 03, December 2021",
            title: "Advancements in Gene Therapy Offer Hope for Rare Diseases"
        },
        {
            image: "https://images.unsplash.com/photo-1576089275776-b6cd5deabdad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Saturday 18, December 2021",
            title: "New Study Highlights Benefits of Plant-Based Diets on Heart Health"
        },
        {
            image: "https://images.unsplash.com/photo-1577896851905-dc99e1f8b4b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Monday 10, January 2022",
            title: "Breakthrough in Alzheimer’s Research Provides New Insights"
        },
        {
            image: "https://images.unsplash.com/photo-1579684288452-b334934f845f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            date: "Thursday 20, January 2022",
            title: "Scientists Develop Wearable Device for Continuous Health Monitoring"
        }
    ];

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-zinc-700 my-5'>Recent Posts</h2>
            {medicalNews.map((item, index) => (
                <div key={index} className='flex items-center gap-4 my-4'>
                    <img className="w-20 h-20 object-cover" src={item.image} alt="" />
                    <div>
                        <p className='text-lg text-zinc-500'>{item.date}</p>
                        <h4>{item.title}</h4>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RecentImportantPost