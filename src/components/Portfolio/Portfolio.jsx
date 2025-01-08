import React from 'react'
import ActorsPic from '../../images/chairs__card-image_actors.jpg'
import Art from '../../images/chairs__card-image_art.jpeg'
import Circus from '../../images/chairs__card-image_circus.jpg'
import Dance from '../../images/chairs__card-image_dance.jpg'
import Folk from '../../images/chairs__card-image_folk.jpg'
import chairs from '../../utils/chairs.js'
import _ from 'lodash'
// import Instr from '../../images/chairs__card-image_instr.jpg'
// import Skd from '../../images/chairs__card-image_skd.jpg'
// import Theater from '../../images/chairs__card-image_theater.jpg'
// import Vocal from '../../images/chairs__card-image_vocal.jpg'


class Portfolio extends React.Component {
  render() {
    return (
      <section id="content">
	      <div className="content-wrap">
		      <div className="container clearfix">
            <div style={{
                backgroundColor: `#fff`,
                padding: `10px 0 0 0`
              }} id="portfolio" className="portfolio row grid-container gutter-40 fitRows">
                {_.shuffle(chairs).map(item =>(

                  <article key={item.id} className="portfolio-item col-sm-6 col-12 pf-media pf-icons">
                <div className="grid-inner">
                  <div className="portfolio-image">
                    <a href="portfolio-single.html">
                      <img src={item.image} alt="Open Imagination"></img>
                    </a>
                    <div className="bg-overlay">
                      <div className="bg-overlay-content dark fadeIn"
                      // data-hover-animate="fadeIn"
                      >
                        <a href="images/portfolio/full/1.jpg" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350 image"
                        // data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350" data-lightbox="image" 
                        title="Image"><i className="icon-line-plus"></i></a>
                        <a href="portfolio-single.html" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350"
                        // data-hover-animate="fadeInDownSmall" data-hover-animate-out="fadeOutUpSmall" data-hover-speed="350"
                        ><i className="icon-line-ellipsis"></i></a>
                      </div>
                      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                    </div>
                  </div>
                  <div className="portfolio-desc">
                    <h3><a href="portfolio-single.html">{item.title}</a></h3>
                    {/* <span><a href="#">Media</a>, <a href="#">Icons</a></span> */}
                  </div>
                </div>
              </article>
                      ))}

              {/* <article className="portfolio-item col-sm-6 col-12 pf-media pf-icons">
                <div className="grid-inner">
                  <div className="portfolio-image">
                    <a href="portfolio-single.html">
                      <img src={Art} alt="Open Imagination"></img>
                    </a>
                    <div className="bg-overlay">
                      <div className="bg-overlay-content dark fadeIn">
                        <a href="images/portfolio/full/1.jpg" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350 image" title="Image"><i className="icon-line-plus"></i></a>
                        <a href="portfolio-single.html" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350"><i className="icon-line-ellipsis"></i></a>
                      </div>
                      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                    </div>
                  </div>
                  <div className="portfolio-desc">
                    <h3><a href="portfolio-single.html">Декоративно прикладное творчество</a></h3>
                  </div>
                </div>
              </article>

              <article className="portfolio-item col-sm-6 col-12 pf-media pf-icons">
                <div className="grid-inner">
                  <div className="portfolio-image">
                    <a href="portfolio-single.html">
                      <img src={Circus} alt="Open Imagination"></img>
                    </a>
                    <div className="bg-overlay">
                      <div className="bg-overlay-content dark fadeIn">
                        <a href="images/portfolio/full/1.jpg" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350 image" title="Image"><i className="icon-line-plus"></i></a>
                        <a href="portfolio-single.html" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350"><i className="icon-line-ellipsis"></i></a>
                      </div>
                      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                    </div>
                  </div>
                  <div className="portfolio-desc">
                    <h3><a href="portfolio-single.html">Цирковое искусство</a></h3>
                  </div>
                </div>
              </article>

              <article className="portfolio-item col-sm-6 col-12 pf-media pf-icons">
                <div className="grid-inner">
                  <div className="portfolio-image">
                    <a href="portfolio-single.html">
                      <img src={Dance} alt="Open Imagination"></img>
                    </a>
                    <div className="bg-overlay">
                      <div className="bg-overlay-content dark fadeIn">
                        <a href="images/portfolio/full/1.jpg" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350 image" title="Image"><i className="icon-line-plus"></i></a>
                        <a href="portfolio-single.html" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350"><i className="icon-line-ellipsis"></i></a>
                      </div>
                      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                    </div>
                  </div>
                  <div className="portfolio-desc">
                    <h3><a href="portfolio-single.html">Хореографическое творчество</a></h3>
                  </div>
                </div>
              </article>

              <article className="portfolio-item col-sm-6 col-12 pf-media pf-icons">
                <div className="grid-inner">
                  <div className="portfolio-image">
                    <a href="portfolio-single.html">
                      <img src={Folk} alt="Open Imagination"></img>
                    </a>
                    <div className="bg-overlay">
                      <div className="bg-overlay-content dark fadeIn">
                        <a href="images/portfolio/full/1.jpg" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350 image" title="Image"><i className="icon-line-plus"></i></a>
                        <a href="portfolio-single.html" className="overlay-trigger-icon bg-light text-dark fadeInDownSmall fadeOutUpSmall 350"><i className="icon-line-ellipsis"></i></a>
                      </div>
                      <div className="bg-overlay-bg dark" data-hover-animate="fadeIn"></div>
                    </div>
                  </div>
                  <div className="portfolio-desc">
                    <h3><a href="portfolio-single.html">Этнохудожественное творчество</a></h3>
                  </div>
                </div>
              </article> */}
            </div>
          </div>       
        </div>
      </section>
    )
  }
}

export default Portfolio