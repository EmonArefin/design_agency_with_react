import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import TeamPage from './pages/TeamPage';
import TestimonialPage from './pages/TestimonialPage';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import SubscribeSection from './component/commonComponent/subscribeSection/SubscribeSection';
import Footer from './component/commonComponent/footerSection/Footer';
import NavbarScroll from './component/commonComponent/navbarSection/Navbar';

const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <NavbarScroll/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/team' element={<TeamPage/>}/>
            <Route path='/service' element={<ServicePage/>}/>
            <Route path='/project' element={<ProjectPage/>}/>
            <Route path='/testimonial' element={<TestimonialPage/>}/>
          </Routes>
          <SubscribeSection/>
          <Footer/>
        </BrowserRouter>
      </>
    </div>
  );
};

export default App;
