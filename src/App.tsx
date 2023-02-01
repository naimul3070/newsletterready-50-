import Home from 'newsLetter/Home';
import React, { useEffect } from 'react';


import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();


  useEffect(() => {

  }, []);
  return (
    <div className="App relative">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<LoginForm />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </div>
  );
}

export default App;
