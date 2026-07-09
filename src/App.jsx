import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import WhyJoin from './pages/WhyJoin';
import Exhibitors from './pages/Exhibitors';
import Agenda from './pages/Agenda';
import Gallery from './pages/Gallery';
import Tickets from './pages/Tickets';
import Sponsors from './pages/Sponsors';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/why-join" element={<WhyJoin />} />
        <Route path="/exhibitors" element={<Exhibitors />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
