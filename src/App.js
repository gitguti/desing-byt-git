import './styles/globals.scss'
import {HashRouter, Route, Routes} from 'react-router-dom';
import About from './pages/About.jsx';
import CryptoBaddies from './pages/projects/CryptoBaddies.jsx';
import Bloombot from './pages/projects/Bloombot';
import CryptoOfertas from './pages/projects/CryptoOfertas';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
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
