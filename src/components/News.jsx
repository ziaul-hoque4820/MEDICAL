import React from "react";
import Slider from "react-slick";
import getImage from "../utils/getImage";

const News = () => {
  const newsData = [
    {
      id: 1,
      title: "How to Stay Healthy During Winter",
      description:
        "Winter health tips to keep you warm and fit during the colder months.",
      image: "https://img.freepik.com/free-vector/realistic-world-health-day-concept_23-2148444858.jpg?t=st=1736277385~exp=1736280985~hmac=8f98e1b4623511ccf8add6612025cd99118e4064ef94006dfb36cf76110a4257&w=740"
    },
    {
      id: 2,
      title: "Advancements in Heart Surgery",
      description:
        "Learn about the latest techniques in heart surgery from top doctors.",
        image: "https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  
    },
    {
      id: 3,
      title: "Mental Health Awareness more...",
      description:
        "Importance of taking care of your mental health in the modern age.",
      image: "https://images.pexels.com/photos/8376285/pexels-photo-8376285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 4,
      title: "Nutrition for a Better Life more...",
      description:
        "Discover the role of nutrition in living a healthier and longer life.",
      image: "https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 5,
      title: "Top Exercises for Busy Professionals",
      description:
        "Stay fit even with a packed schedule with these effective exercises.",
      image: "https://images.pexels.com/photos/7723388/pexels-photo-7723388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 6,
      title: "Common Myths About Vaccines",
      description:
        "Breaking down popular vaccine myths with scientific evidence.",
      image: "https://images.pexels.com/photos/263194/pexels-photo-263194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 7,
      title: "Improving Your Sleep Quality more...",
      description:
        "Simple tips to achieve a better and deeper night's sleep naturally.",
      image: "https://images.pexels.com/photos/207496/pexels-photo-207496.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 8,
      title: "Stress Management Techniques",
      description:
        "Practical techniques to manage stress in your daily life effectively.",
      image: "https://images.pexels.com/photos/7088524/pexels-photo-7088524.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 slides per view
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Latest News & Updates
        </h2>
        <Slider {...settings}>
          {newsData.map((news, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center">
                <img className="w-56 h-48 object-cover"  src={news.image} alt="news Img" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm">{news.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default News;
