import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";

import Home from "./views/Home";
import Z2 from './views/Z2';
import Zluxuria from './views/Zluxuria';
import { useEffect } from 'react';
// import { useNavigate } from 'react-router';
import About from './views/About';
import PrivacyPolicy from './views/PrivacyPolicy';



function App() {


  const location = useLocation();
  // const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    // console.log(location.pathname);
  }, [location.pathname]);




  return (


    <AnimatePresence >
      <Routes location={location} key={location.key}>

        <Route path="/" element={<Home />} />
        <Route path="/z2" element={<Z2 />} />

        <Route path="/zluxuria" element={<Zluxuria />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />


      </Routes>
    </AnimatePresence>

  );
}


export default App;
