
import { ImCalendar } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";

function BannerSection() {
    return (
        <section className="container mx-auto md:flex items-center relative xl:mb-28 md:mb-20 mb-9 ">
            <div
                className="w-full lg:h-[500px] sm:h-[380px]"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1664902276790-90624a60ff47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className="text-center px-5 lg:py-40 md:text-left md:py-10 md:w-1/2 sm:py-20">
                    <span className='text-[#273c75] text-[18px] font-bold '>Caring for Life</span>
                    <h1 className="text-5xl text-white font-bold mb-5 mt-5 font-yeseva ">Leading the Way in Medical Excellence</h1>
                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 font-workSans">
                        Our Services
                    </button>
                </div>
            </div>


            {/* শুধুমাত্র lg এবং এর ওপরের ডিভাইসে দৃশ্যমান */}
            <div className="container mx-auto justify-center gap-16 absolute top-[450px] 2xl:left-4 xl:left-[10px] hidden lg:flex">
                <div className="bg-[#1F2B6C] w-[316px] h-[100px] flex justify-center gap-7 text-white items-center">
                    <span>Book an Appointment</span>
                    <ImCalendar className="text-[#fff] w-[35px] h-[35px]" />
                </div>
                <div className="bg-[#BFD2F8] w-[316px] h-[100px] flex justify-center gap-7 text-white items-center">
                    <span>Book an Appointment</span>
                    <IoMdContacts className="text-[#487eb0] w-[35px] h-[35px]" />
                </div>
                <div className="bg-[#159EEC] w-[316px] h-[100px] flex justify-center gap-7 text-white items-center">
                    <span>Book an Appointment</span>
                    <FaMoneyCheck className="text-[#fff] w-[35px] h-[35px]" />
                </div>
            </div>


        </section>
    )
}

export default BannerSection