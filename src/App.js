import './styles/globals.scss'
import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About.jsx';
import CryptoBaddies from './pages/projects/CryptoBaddies.jsx';
import Bloombot from './pages/projects/Bloombot';
import CryptoOfertas from './pages/projects/CryptoOfertas';
import Home from './pages/Home.jsx';
import ScrollToTop from './components/ScrollToTop';
import OnSalud from './pages/projects/OnSalud.jsx';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
        <ScrollToTop />
        <Routes>
        <Route index element={<Home />}/>
        <Route path='/About' element={<About />}/> 
        <Route path='projects/cryptoBaddies' element={<CryptoBaddies />}/>
        <Route path='projects/Bloombot' element={<Bloombot />}/>  
        <Route path='projects/CryptoOfertas' element={<CryptoOfertas />}/> 
        </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
