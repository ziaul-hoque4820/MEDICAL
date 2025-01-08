import { ImCalendar } from "react-icons/im";
import { IoMdContacts } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";

function MainHeroSection() {
    return (
        <div className="relative mb-40">
            {/* শুধুমাত্র lg এবং এর ওপরের ডিভাইসে দৃশ্যমান */}
            <div className="container mx-auto justify-center gap-16 absolute top-[-47px] 2xl:left-44 xl:left-[80px] hidden lg:flex">
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
            <div>
                
            </div>
        </div>
    );
}

export default MainHeroSection;

