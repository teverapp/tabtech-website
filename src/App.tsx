import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navigationbar from "./components/Navigationbar.tsx";
import Programs from "./pages/Programs.tsx";
import LandingPage from "./pages/LandingPage.tsx";
import Footer from "./components/Footer.tsx";
import Shows from "./pages/Shows.tsx";
import Impact from "./pages/Impact";
import ScrollToTop from "./components/ScrollToTop.tsx";
import GetInvolved from "./pages/GetInvolved.tsx";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navigationbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="our-programs" element={<Programs />} />
        <Route path="shows" element={<Shows />} />
        <Route path="impact" element={<Impact />} />
        <Route path="get-involved" element={<GetInvolved />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
