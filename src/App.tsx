import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Navigationbar from "./Navigationbar";
import Programs from "./Programs";
import LandingPage from "./LandingPage";
import Footer from "./Footer";
import Shows from "./Shows";
import Impact from "./Impact";
import GetInvolved from "./GetInvolved";
import Donate from "./Donate";
import Contact from "./Contact";
function App() {
  return (
    <Router>
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
