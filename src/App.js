import { Route, Routes } from 'react-router-dom'

import Home from "./views/Home";
import Z2 from './views/Z2';
import Zluxuria from './views/Zluxuria';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';



function App() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);


  return (

    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/corporate-Space" element={<Z2 />} />

        <Route path="/luxurious-living" element={<Zluxuria />} />


      </Routes>
    </>

  );
}


export default App;
