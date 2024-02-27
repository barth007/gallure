import React, {Component} from "react";
import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// components
import AboutUsPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";
import GalleryPage from "./pages/galleryPage/gallery";
import HomePage from "./pages/homePage/homePage";




function App() {
  return (
    <Router>
      <>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
          </Routes>
      </>
      </Router>
  );
}

export default App;
