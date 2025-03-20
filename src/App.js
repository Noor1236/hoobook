import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Listings from './pages/Listings';
import HotelDetails from './pages/HotelDetails';
import BookingPage from './pages/BookingPage';
import Dashboard from './pages/Dashboard';
import AdminPanel from './pages/AdminPanel';
import DestinationDetail from './pages/DestinationDetail';
import ModifyBooking from './pages/ModifyBooking';
import About from './pages/About';
import Services from './pages/Service';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/destination/:id" element={<DestinationDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/modify-booking" element={<ModifyBooking />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
