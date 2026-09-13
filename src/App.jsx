import Home from "./pages/Home";
import LearnFisheryPage from "./pages/Course";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import WholesalePage from "./pages/WholesalePage";
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
    </Router>
  )
}

export default App
