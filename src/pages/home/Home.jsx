import Contact from "../../components/Contact"
import Doctors from "../../components/Doctors"
import News from "../../components/News"
import Appointment from "./appointment"
import BannerSection from "./BannerSection"
import OurService from "./OurService"
import OurSpecialist from "./OurSpecialist"

function Home() {
    return (
        <section className="container mx-auto">
            <BannerSection />

            <div className="my-10">
                <h4 className="text-center text-[20px] font-bold text-[#159EEC] ">Welcome to Meddical</h4>
                <h2 className="text-center text-4xl font-bold mt-3 ">A Great Place to Receive Care</h2>
                <p className="text-center text-slate-400 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat <br /> scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur <br /> proin massa in. Consequat faucibus porttitor enim et.</p>
            </div>

            <div className="my-14">
                <img className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1579684288361-5c1a2957a700?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="bg img" />
            </div>

            <OurService />

            <OurSpecialist />

            <Appointment />

            <Doctors />

            <News />

            <Contact />

        </section>
    )
}

export default Home