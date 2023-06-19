
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Menu from './pages/Menu/Menu';
import Gallery from './pages/Gallery/Gallery';
import Media from './pages/Media/Media';
import WhatsNew from './pages/WhatsNew/WhatsNew';
import Location from './pages/Location/Location';
import Careers from './pages/Careers/Careers';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import Drinks from './pages/Drinks/Drinks';
import Foods from './pages/Foods/Foods';

function App() {

useEffect(() => {
  setTimeout(() => {
    $('.hdr_righbcl').click(function () {
      $('.hdr_righbsh').hide();
    });

    $('.hdr_righb').click(function () {
      $('.hdr_righbsh').show();
    });

    $('.fdmnutb li').on('click', function () {
      $(this).addClass('actfdmn').siblings().removeClass('actfdmn');
    });

    $('.popupimgcl').click(function () {
      $('.popupimg').hide();
    });
  }, 1000);
})


  return (
    <>
    {/* <Header /> */}
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
          <Route path='/drinks' element={<Drinks />} />
          <Route path='/foods' element={<Foods />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/media' element={<Media />} />
          <Route path='/whats-new' element={<WhatsNew />} />
          <Route path='/location' element={<Location />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/careers' element={<Careers />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
