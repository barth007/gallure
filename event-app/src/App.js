import React, {Component} from "react";
import { ReactDOM } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GalleryHeader from "./components/common/navbar/hamburger";

// components
import AboutUsPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";
import GalleryPage from "./pages/galleryPage/gallery";
import HomePage from "./pages/homePage/homePage";
import NotFound from "./pages/notFound/NotFound";




function App() {
  return (
    <Router>
      <>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutUsPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </>
      </Router>
   
 
    
  );
}

export default App;
