import './styles/globals.scss'
import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About.jsx';
import CryptoBaddies from './pages/projects/CryptoBaddies.jsx';
import Bloombot from './pages/projects/Bloombot';
import CryptoOfertas from './pages/projects/CryptoOfertas';
import CryptoShepherd from './pages/projects/CryptoShepherd';
import Allios from './pages/projects/Allios';
import Home from './pages/Home.jsx';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <ScrollToTop />
        <Routes>
        <Route index element={<Home />}/>
        <Route path='/About' element={<About />}/> 
        <Route path='projects/:projectId' element={<CryptoBaddies />}/>
        <Route path='projects/:projectId' element={<Bloombot />}/>  
        <Route path='projects/CryptoOfertas' element={<CryptoOfertas />}/> 
        <Route path='projects/:projectId' element={<CryptoShepherd />}/> 
        <Route path='projects/:projectId' element={<Allios />}/> 


        </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
