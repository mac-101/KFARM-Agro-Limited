import Home from "./pages/Home";
import LearnFisheryPage from "./pages/Course";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import WholesalePage from "./pages/WholesalePage";
import { MessageCircle } from "lucide-react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="learn-fishery" element={<LearnFisheryPage/>} />
        <Route path="varieties-wholesale" element={<WholesalePage/>} />
        <Route path="contact" element={<ContactPage/>} />
      </Routes>
      <Footer/>
      <a
        href="https://wa.me/2349115380670?text=Hello%20KFARM%20Agro%20Limited%2C%20I%27d%20like%20to%20make%20an%20enquiry."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with KFARM Agro Limited on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </Router>
  )
}

export default App
