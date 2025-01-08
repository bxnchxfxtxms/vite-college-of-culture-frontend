import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { Helmet } from 'react-helmet'
// import App from './App.jsx'
// import Header from './components/Header/Header.jsx'
import HeaderDark from '../Header/HeaderDark.jsx'
import Portfolio from '../Portfolio/Portfolio.jsx'
import Slider from '../Slider/Slider.jsx'
import FooterStick from '../FooterStick/FooterStick.jsx'
import Footer from '../Footer/Footer.jsx'
import GoToTop from '../GoToTop/GoToTop.jsx'
import { Routes, Route } from 'react-router-dom'
import Dick from '../Dick/Dick.jsx'
import Home from '../../elements/Home.jsx'
import Students from '../../elements/Students.jsx'
import InfoForApplicants from '../../elements/InfoForApplicants.jsx'
import ApplicationRules from '../../elements/ApplicationRules.jsx'
import BasicInfo from '../../elements/BasicInfo.jsx'
import Structure from '../../elements/Structure.jsx'
import Vacancy from '../../elements/Vacancy.jsx'

class App extends React.Component {
  render() {
    return(
      <div>
        <HeaderDark />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/dick" element={<Dick/>}/>
          <Route exact path="/students" element={<Students/>}/>
          <Route exact path="/InfoForApplicants" element={<InfoForApplicants/>}/>
          <Route exact path="/ApplicationRules" element={<ApplicationRules/>}/>
          <Route exact path="/BasicInfo" element={<BasicInfo/>}/>
          <Route exact path="/Structure" element={<Structure/>}/>
          <Route exact path="/Vacancy" element={<Vacancy/>}/>
        </Routes>
        <Footer />
        <GoToTop />
        <Helmet>
          <script src='/src/vendor/js/jquery.js' />
          <script src='/src/vendor/js/plugins.min.js' />
          <script src='/src/vendor/js/functions.js' />
        </Helmet>
      </div>
    )
  }
}

export default App
