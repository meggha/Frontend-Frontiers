import { useState } from 'react';
import LandingPage from './pages/landing_page';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
