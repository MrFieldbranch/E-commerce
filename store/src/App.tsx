
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './views/LandingPage/LandingPage';
import ErrorPage from './views/ErrorPage/ErrorPage';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import SweatersMen from './views/SweatersMen/SweatersMen';
import SweatersWomen from './views/SweatersWomen/SweatersWomen';
import TrousersMen from './views/TrousersMen/TrousersMen';
import TrousersWomen from './views/TrousersWomen/TrousersWomen';
import Admin from './views/Admin/Admin';
import ShirtsMen from './views/ShirtsMen/ShirtsMen';
import ShirtsWomen from './views/ShirtsWomen/ShirtsWomen';
import ShoesMen from './views/ShoesMen/ShoesMen';
import ShoesWomen from './views/ShoesWomen/ShoesWomen';
import AllMen from './views/AllMen/AllMen';
import AllWomen from './views/AllWomen/AllWomen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='content-container'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/start' element={<LandingPage />} />
          <Route path='/allmen' element={<AllMen />} />
          <Route path='/allwomen' element={<AllWomen />} />
          <Route path='/sweatersmen' element={<SweatersMen />} />
          <Route path='/sweaterswomen' element={<SweatersWomen />} />
          <Route path='/trousersmen' element={<TrousersMen />} />
          <Route path='/trouserswomen' element={<TrousersWomen />} />
          <Route path='/shirtsmen' element={<ShirtsMen />} />
          <Route path='/shirtswomen' element={<ShirtsWomen />} />
          <Route path='/shoesmen' element={<ShoesMen />} />
          <Route path='/shoeswomen' element={<ShoesWomen />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
