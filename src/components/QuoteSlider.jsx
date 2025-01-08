import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const quotes = [
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.",
        author: "John Doe"
    },
    {
        text: "Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim.",
        author: "Jane Doe"
    },
    {
        text: "Aenean non orci nec felis bibendum cursus eu a nunc. Integer scelerisque ligula ut arcu.",
        author: "Alex Smith"
    }
];

const QuoteSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        swipe: true
    };

    return (
        <div 
            className="relative w-full h-[400px] flex items-center justify-center bg-cover bg-center" 
            style={{backgroundImage: 'url(https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg)'}}
        >
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50"></div>
            <Slider {...settings} className="text-center text-white z-10 max-w-2xl">
                {quotes.map((quote, index) => (
                    <div key={index}>
                        <p className="text-2xl italic">{quote.text}</p>
                        <p className="mt-4 font-bold">{quote.author}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default QuoteSlider;

