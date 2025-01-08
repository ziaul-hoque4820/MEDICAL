
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Neurology", image: "https://images.unsplash.com/photo-1612276529731-4b21494e6d71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Cardiology", image: "https://images.unsplash.com/photo-1673865641073-4479f93a7776?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Dr. Sarah Lee", specialty: "Orthopedics", image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Dr. Adam Brown", specialty: "Dermatology", image: "https://images.unsplash.com/photo-1580281658626-ee379f3cce93?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Dr. Emily White", specialty: "Pediatrics", image: "https://images.unsplash.com/photo-1700041785712-649e859d9909?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto py-10 bg-gray-100">
      <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">Our Doctors</h2>
      <Slider {...settings}>
        {doctors.map((doctor) => (
          <div key={doctor.id} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-4 text-center">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 object-cover mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-blue-500">{doctor.specialty}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Doctors;
