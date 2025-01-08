
import { useState } from "react";
import { VscCallIncoming } from "react-icons/vsc";
import { IoMdClock } from "react-icons/io";
import { MdAddLocationAlt } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { IoSearchCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="container mx-auto bg-white dark:bg-gray-800 shadow-md">
            {/* Large Device: Header Info */}
            <div className="hidden lg:flex justify-between items-center px-6 py-4">
                <div className="font-bold text-2xl text-blue-600">MEDICAL</div>
                <div className="flex space-x-8 text-gray-600 dark:text-gray-300">
                    <div className="flex items-center space-x-2">
                    <VscCallIncoming className="text-[#ff9f43] w-[30px] h-[30px]" />
                        <span>Emergency: (237) 681-812-255</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <IoMdClock className="text-[#10ac84] w-[35px] h-[35px]" />
                        <span>Work Hour: 09:00 - 20:00 Everyday</span>
                    </div>
                    <div className="flex items-center space-x-2">
                    <MdAddLocationAlt className="text-[#487eb0] w-[35px] h-[35px]" />
                        <span>Location: 0123 Some Place</span>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between bg-[#1F2B6C] items-center px-6 py-4">
                {/* Logo */}
                <div className="lg:hidden text-white font-bold text-2xl">MEDICAL</div>

                {/* Menu Icon for Mobile */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white dark:text-gray-300">
                    <RiMenu2Fill className="text-[#f5f6fa] w-[35px] h-[35px]" />
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link to="/" className="text-white hover:text-blue-500 font-workSans">Home</Link>
                    <Link to="/about" className="text-white hover:text-blue-500 font-workSans">About</Link>
                    <Link to="/services" className="text-white hover:text-blue-500 font-workSans">Services</Link>
                    <Link to="/doctors" className="text-white hover:text-blue-500 font-workSans">Doctors</Link>
                    <Link to="/news" className="text-white hover:text-blue-500 font-workSans">News</Link>
                    <Link to="/contact" className="text-white hover:text-blue-500 font-workSans">Contact</Link>
                </div>

                {/* Search Bar */}
                <div className="hidden lg:flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button className="text-white dark:text-gray-300">
                    <IoSearchCircleSharp className="text-[#f5f6fa] w-[35px] h-[35px]" />
                    </button>
                </div>

                {/* Appointment Link */}
                <div className="hidden lg:block">
                    <Link
                        href="/appointment"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-workSans"
                    >
                        Appointment
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden bg-gray-50 dark:bg-gray-900 p-4">
                    <Link to="/" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">Home</Link>
                    <Link to="/about" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">About</Link>
                    <Link to="/services" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">Services</Link>
                    <Link to="/doctors" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">Doctors</Link>
                    <Link to="/news" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">News</Link>
                    <Link to="/contact" className="block py-2 text-gray-600 hover:bg-green-300 rounded-md dark:text-gray-300">Contact</Link>
                    <Link to="/appointment" className="block py-2 mt-4 bg-blue-500 text-white text-center rounded-lg font-workSans">Appointment</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
