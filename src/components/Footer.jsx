
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white px-3 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold">MEDDICAL</h2>
          <p className="mt-4 text-gray-300">
            Leading the Way in Medical Excellence, Trusted Care.
          </p>
          <div className="mt-6">
            <p className="mb-2">
              Phone: <span className="text-gray-400">(+00)123-456-789</span>
            </p>
            <p>
              Email: <span className="text-gray-400">support@medical.com</span>
            </p>
            <p>
              Location: <span className="text-gray-400">123 Some Street, City, Country</span>
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-300">Home</li>
            <li className="hover:text-blue-300">Services</li>
            <li className="hover:text-blue-300">Doctors</li>
            <li className="hover:text-blue-300">Appointment</li>
            <li className="hover:text-blue-300">Contact Us</li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-blue-300">General Checkup</li>
            <li className="hover:text-blue-300">Cardiology</li>
            <li className="hover:text-blue-300">Pediatrics</li>
            <li className="hover:text-blue-300">Neurology</li>
            <li className="hover:text-blue-300">Surgery</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
          <p className="text-gray-300 mb-4">
            Get the latest updates and offers.
          </p>
          <div className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg w-full text-black"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Line & Social Icons */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-white transition duration-300 text-2xl"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
        <p>&copy; 2024 MEDDICAL. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
