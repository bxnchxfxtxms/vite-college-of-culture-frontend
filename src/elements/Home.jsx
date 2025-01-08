import React from 'react'
// import HeaderDark from '../components/Header/HeaderDark.jsx'
import Slider from '../components/Slider/Slider.jsx'
import ArticleHome from '../components/Article/ArticleHome.jsx'
import Portfolio from '../components/Portfolio/Portfolio.jsx'
import FooterStick from '../components/FooterStick/FooterStick.jsx'
// import Footer from '../components/Footer/Footer.jsx'

class Home extends React.Component {
  render() {
    return(
      <div>
        {/* <HeaderDark /> */}
        <Slider />
        <ArticleHome />
        <Portfolio />
        <FooterStick />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default Home