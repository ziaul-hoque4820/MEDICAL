import { VscCallIncoming } from "react-icons/vsc";
import { IoMdClock } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";

function Header() {
    return (
        <div className="container mx-auto lg:hidden bg-gray-50 dark:bg-gray-900 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <VscCallIncoming className="text-[#ff9f43] w-[30px] h-[30px]" />
                <span className="font-workSans">(237) 681-812-255</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <IoMdClock className="text-[#10ac84] w-[35px] h-[35px]" />
                <span className="font-workSans">09:00 - 20:00</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <MdAddLocationAlt className="text-[#487eb0] w-[35px] h-[35px]" />
                <span className="font-workSans">0123 Some Place</span>
            </div>
        </div>
    )
}

export default Header
