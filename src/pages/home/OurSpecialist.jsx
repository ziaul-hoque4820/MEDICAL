import getImage from "../../utils/getImage"

function OurSpecialist() {
    const service = [
        { title: "Neurology", image: "brain .png"},
        { title: "Bones", image: "bone-cancer.png" },
        { title: "Oncology", image: "oncology.png" },
        { title: "Otorhinolaryngology", image: "otorhinolaryngology.png" },
        { title: "Ophthalmology", image: "ophthalmology.png" },
        { title: "Cardiovascular", image: "healthcare.png" },
        { title: "Pulmonology", image: "pulmonology.png" },
        { title: "Renal Medicine", image: "kidneys.png" },
        { title: "Gastroenterology", image: "gastroenterology.png" },
        { title: "Urology", image: "urinary-tract.png" },
        { title: "Dermatology", image: "spots.png" },
        { title: "Gynaecology", image: "maternity.png" },
        { title: "Immunology", image: "spots.png" },
        { title: "Psychiatry", image: "mood.png" },
        { title: "Rheumatology", image: "rheumatology.png" }
    ]
    return (
        <section className="p-2">
            <h3 className="text-center text-[20px] font-bold text-[#159EEC]">Always Caring</h3>
            <h2 className="text-center text-4xl font-bold mt-3">Our Specialties</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-14">

                {service.map((item, index) => (
                    <div key={index} className="flex items-center justify-center h-40 text-gray-600 shadow-xl rounded-lg bg-slate-200 hover:bg-blue-900 hover:text-white cursor-pointer">
                        <div className="text-center">
                            <img className="w-16 h-16 ml-5 mb-5 " src={getImage(`../assets/images/${item.image}`)} alt="brain" />
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default OurSpecialist