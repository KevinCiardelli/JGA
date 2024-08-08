import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Gallery from './components/pages/Gallery'
import PoolHouse from './components/pages/PoolHouse'
import Woodwork from './components/pages/Woodwork'
import Cabana from './components/pages/Cabana'
import OakDrive from './components/pages/OakDrive'
import MasterBathroom from './components/pages/MasterBathroom'
import Exterior from './components/pages/Exterior'
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/PoolHouse" element={<PoolHouse />} />
          <Route path="/Woodwork" element={<Woodwork />} />
          <Route path="/Cabana" element={<Cabana />} />
          <Route path="/OakDrive" element={<OakDrive />} />
          <Route path="/MasterBathroom" element={<MasterBathroom />} />
          <Route path="/Exterior" element={<Exterior />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
