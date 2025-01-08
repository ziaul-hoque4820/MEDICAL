import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import About from './pages/about/About';
import Service from './pages/services/Service';
import Doctors from './pages/doctors/Doctors';
import News from './pages/news/News';
import Contact from './pages/contact/Contact';

function App() {


  return (
    <>
        <Header />
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>

        <Footer />
    </>
  )
}

export default App
