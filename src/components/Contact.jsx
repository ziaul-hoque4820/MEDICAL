import getImage from "../utils/getImage";

function Contact() {
    const contact = [
        { title: "Emergency", description1: "(237) 681-812-255", description2: "(237) 666-331-894", image: "emergency-call.png" },
        { title: "Location", description1: "0123 Some place", description2: "9876 Some country", image: "google-maps.png" },
        { title: "Email", description1: "fildineeesoe@gmail.com", description2: "myebstudios@gmail.com", image: "gmail.png" },
        { title: "Working Hours", description1: "Mon-Sat 09:00-20:00", description2: "Sunday Emergency only", image: "working-time.png" }
    ]
    return (
        <section className="mt-10 p-4">
            <div className="container mx-auto text-center">
                <h3 className="text-blue-500 uppercase font-semibold mb-2">Get In Touch</h3>
                <h2 className="text-2xl font-bold mb-8">Contact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {contact.map((item, index) => (
                        <div key={index} className="bg-blue-100 py-8 text-gray-700 rounded-lg hover:bg-blue-900 hover:text-white flex flex-col items-center">
                            <img className="w-16 h-16 mb-5" src={getImage(`../assets/images/${item.image}`)} alt="" />
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-sm">{item.description1}</p>
                            <p className="text-sm">{item.description2}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contact;
