import React from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent';
import { HeroComponent } from './components/HeroComponent';
import { ProjectHighlights } from './components/ProjectHighlights';
import { FooterComponent } from './components/FooterComponent';
import { AboutComponent } from './components/AboutComponent';
import { Route, Routes } from 'react-router-dom';
import { ServiceComponent } from './components/ServiceComponent';
import { ContactUsComponent } from './components/ContactUsComponent';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <main className='container mx-auto px-7 sm:px-6 lg:px-8'>
        <header>
          <HeaderComponent />
        </header>
        <section>
          <Routes>
            <Route element={<><HeroComponent /><ProjectHighlights /></>} path='/' />
            <Route element={<AboutComponent />} path='/about' />
            <Route element={<ServiceComponent />} path='/service' />
            <Route element={<><ContactUsComponent /></>} path='/contact' />
          </Routes>
        </section>
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </div>
  );
};

export default App;
