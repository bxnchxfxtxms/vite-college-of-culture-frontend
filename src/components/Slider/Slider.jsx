import React from 'react'
import background from '../../images/hero-banner.png'

class Slider extends React.Component {
  render() {
    return (
      <section id="slider" className="slider-element slider-parallax swiper_wrapper min-vh-60 min-vh-md-100">
				<div className="slider-inner">
					<div className="swiper-container swiper-parent">
						<div className="swiper-wrapper">
							<div className="swiper-slide dark">
								<div className="container">
									<div className="slider-caption slider-caption-center">
										<h2 className="animated fadeInUp">
											Тверской колледж культуры
										</h2>
										<p className="animated d-none d-sm-block fadeInUp slow">имени Н.А. Львова</p>
									</div>
								</div>
								<div className="swiper-slide-bg" style={{
									backgroundImage: `url(${background})`
								}}></div>
							</div>
							<div className="swiper-slide dark">
								<div className="container">
									<div className="slider-caption slider-caption-center">
										<h2 className="animated fadeOutUp">
											Тверской колледж культуры
										</h2>
										<p className="animated d-none d-sm-block fadeInDown">имени Н.А. Львова</p>
									</div>
								</div>
								<div className="swiper-slide-bg" style={{
									backgroundImage: `url(${background})`
								}}></div>
							</div>
							<div className="swiper-slide dark">
								<div className="container">
									<div className="slider-caption slider-caption-center">
										<h2 className="animated fadeInUp">
											Тверской колледж культуры
										</h2>
										<p className="animated fadeInUp">
											имени Н.А. Львова
										</p>
										<p className="animated d-none d-sm-block fadeInUp 200"
										>имени Н.А. Львова</p>
									</div>
								</div>
								<div className="swiper-slide-bg" style={{
									backgroundImage: `url(${background})`
								}}></div>
							</div>
							<div className="swiper-slide dark">
								<div className="container">
									<div className="slider-caption slider-caption-center">
										<h2 className="animated fadeInUp">
											Тверской колледж культуры
										</h2>
										<p className="animated fadeInUp">
											имени Н.А. Львова
										</p>
										<p className="animated d-none d-sm-block fadeInUp 200"
										>имени Н.А. Львова</p>
									</div>
								</div>
								<div className="swiper-slide-bg" style={{
									backgroundImage: `url(${background})`
								}}></div>
							</div>
							{/* <div className="swiper-slide dark">
								<div className="container">
									<div className="slider-caption slider-caption-center">
										<h2
										// className="animated fadeInUp"
										// data-animate="fadeInUp"
										>Beautifully Flexible</h2>
										<p className="d-none d-sm-block fadeInUp 200" 
										// data-animate="fadeInUp" data-delay="200"
										>Looks beautiful &amp; ultra-sharp on Retina Screen Displays. Powerful Layout with Responsive functionality that can be adapted to any screen size.</p>
									</div>
								</div>
								<div className="video-wrap">
									<video poster="images/videos/explore-poster.jpg" preload="auto" loop autoPlay muted>
										<source src='images/videos/explore.mp4' type='video/mp4' />
										<source src='images/videos/explore.webm' type='video/webm' />
									</video>
									<div className="video-overlay"
									// style="background-color: rgba(0,0,0,0.55);"
									></div>
								</div>
							</div> */}
							{/* <div className="swiper-slide">
								<div className="container">
									<div className="slider-caption">
										<h2 data-animate="fadeInUp">Great Performance</h2>
										<p className="d-none d-sm-block" data-animate="fadeInUp" data-delay="200">Youll be surprised to see the Final Results of your Creation &amp; would crave for more.</p>
									</div>
								</div>
								<div className="swiper-slide-bg" 
								// style="background-image: url('images/slider/swiper/3.jpg'); background-position: center top;"
								></div>
							</div> */}
						</div>
						<div className="slider-arrow-left"><i className="icon-angle-left"></i></div>
						<div className="slider-arrow-right"><i className="icon-angle-right"></i></div>
						<div className="slide-number"><div className="slide-number-current"></div><span>/</span><div className="slide-number-total"></div></div>
					</div>
				</div>
			</section>
    )
  }
}

export default Slider