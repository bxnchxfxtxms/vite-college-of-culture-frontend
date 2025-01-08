import React from 'react'
import Logo from '../Logo/Logo.jsx'

class Footer extends React.Component {
  render() {
    return (

      // <footer id="footer" className="dark">
      //   <div className="container">
      //     <div className="footer-widgets-wrap">
      //       <div className="row col-mb-50">
      //         <div className="col-lg-8">
      //           <div className="row col-mb-50">
      //             <div className="col-md-4">

      //               <div className="widget clearfix">

      //                 <img src="images/footer-widget-logo.png" alt="Image" className="footer-logo"></img>

      //                 <p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards.</p>

      //                 <div 
      //                 // style="background: url('images/world-map.png') no-repeat center center; background-size: 100%;"
      //                 >
      //                   <address>
      //                     <strong>Headquarters:</strong>
      //                     795 Folsom Ave, Suite 600
      //                     San Francisco, CA 94107
      //                   </address>
      //                   <abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521
      //                   <abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433
      //                   <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
      //                 </div>

      //               </div>

      //             </div>

      //             <div className="col-md-4">

      //               <div className="widget widget_links clearfix">

      //                 <h4>Blogroll</h4>

      //                 <ul>
      //                   <li><a href="https://codex.wordpress.org/">Documentation</a></li>
      //                   <li><a href="https://wordpress.org/support/forum/requests-and-feedback">Feedback</a></li>
      //                   <li><a href="https://wordpress.org/extend/plugins/">Plugins</a></li>
      //                   <li><a href="https://wordpress.org/support/">Support Forums</a></li>
      //                   <li><a href="https://wordpress.org/extend/themes/">Themes</a></li>
      //                   <li><a href="https://wordpress.org/news/">Canvas Blog</a></li>
      //                   <li><a href="https://planet.wordpress.org/">Canvas Planet</a></li>
      //                 </ul>

      //               </div>

      //             </div>

      //             <div className="col-md-4">

      //               <div className="widget clearfix">
      //                 <h4>Recent Posts</h4>

      //                 <div className="posts-sm row col-mb-30" id="post-list-footer">
      //                   <div className="entry col-12">
      //                     <div className="grid-inner row">
      //                       <div className="col">
      //                         <div className="entry-title">
      //                           <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
      //                         </div>
      //                         <div className="entry-meta">
      //                           <ul>
      //                             <li>10th July 2021</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>

      //                   <div className="entry col-12">
      //                     <div className="grid-inner row">
      //                       <div className="col">
      //                         <div className="entry-title">
      //                           <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
      //                         </div>
      //                         <div className="entry-meta">
      //                           <ul>
      //                             <li>10th July 2021</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>

      //                   <div className="entry col-12">
      //                     <div className="grid-inner row">
      //                       <div className="col">
      //                         <div className="entry-title">
      //                           <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
      //                         </div>
      //                         <div className="entry-meta">
      //                           <ul>
      //                             <li>10th July 2021</li>
      //                           </ul>
      //                         </div>
      //                       </div>
      //                     </div>
      //                   </div>
      //                 </div>
      //               </div>

      //             </div>
      //           </div>

      //         </div>

      //         <div className="col-lg-4">

      //           <div className="row col-mb-50">
      //             <div className="col-md-4 col-lg-12">
      //               <div className="widget clearfix"
      //               // style="margin-bottom: -20px;"
      //               >

      //                 <div className="row">
      //                   <div className="col-lg-6 bottommargin-sm">
      //                     <div className="counter counter-small"><span data-from="50" data-to="15065421" data-refresh-interval="80" data-speed="3000" data-comma="true"></span></div>
      //                     <h5 className="mb-0">Total Downloads</h5>
      //                   </div>

      //                   <div className="col-lg-6 bottommargin-sm">
      //                     <div className="counter counter-small"><span data-from="0" data-to="10000" data-refresh-interval="1" data-speed="2" data-comma="true"></span></div>
      //                     <h5 className="mb-0">Clients</h5>
      //                   </div>
      //                 </div>

      //               </div>
      //             </div>

      //             <div className="col-md-5 col-lg-12">
      //               <div className="widget subscribe-widget clearfix">
      //                 <h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
      //                 <div className="widget-subscribe-form-result"></div>
      //                 <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="mb-0">
      //                   <div className="input-group mx-auto">
      //                     <div className="input-group-prepend">
      //                       <div className="input-group-text"><i className="icon-email2"></i></div>
      //                     </div>
      //                     <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email"></input>
      //                     <div className="input-group-append">
      //                       <button className="btn btn-success" type="submit">Subscribe</button>
      //                     </div>
      //                   </div>
      //                 </form>
      //               </div>
      //             </div>

      //             <div className="col-md-3 col-lg-12">
      //               <div className="widget clearfix" 
      //               // style="margin-bottom: -20px;"
      //               >

      //                 <div className="row">
      //                   <div className="col-6 col-md-12 col-lg-6 clearfix bottommargin-sm">
      //                     <a href="#" className="social-icon si-dark si-colored si-facebook mb-0" 
      //                     // style="margin-right: 10px;"
      //                     >
      //                       <i className="icon-facebook"></i>
      //                       <i className="icon-facebook"></i>
      //                     </a>
      //                     <a href="#"><small 
      //                     // style="display: block; margin-top: 3px;"
      //                     ><strong>Like us</strong>on Facebook</small></a>
      //                   </div>
      //                   <div className="col-6 col-md-12 col-lg-6 clearfix">
      //                     <a href="#" className="social-icon si-dark si-colored si-rss mb-0" 
      //                     // style="margin-right: 10px;"
      //                     >
      //                       <i className="icon-rss"></i>
      //                       <i className="icon-rss"></i>
      //                     </a>
      //                     <a href="#"><small
      //                     // style="display: block; margin-top: 3px;"
      //                     ><strong>Subscribe</strong>to RSS Feeds</small></a>
      //                   </div>
      //                 </div>

      //               </div>
      //             </div>

      //           </div>

      //         </div>
      //       </div>

      //     </div>


      //   </div>



      //   <div id="copyrights">
      //     <div className="container">

      //       <div className="row col-mb-30">

      //         <div className="col-md-6 text-center text-md-left">
      //           Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.
      //           <div className="copyright-links"><a href="#">Terms of Use</a> / <a href="#">Privacy Policy</a></div>
      //         </div>

      //         <div className="col-md-6 text-center text-md-right">
      //           <div className="d-flex justify-content-center justify-content-md-end">
      //             <a href="#" className="social-icon si-small si-borderless si-facebook">
      //               <i className="icon-facebook"></i>
      //               <i className="icon-facebook"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-twitter">
      //               <i className="icon-twitter"></i>
      //               <i className="icon-twitter"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-gplus">
      //               <i className="icon-gplus"></i>
      //               <i className="icon-gplus"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-pinterest">
      //               <i className="icon-pinterest"></i>
      //               <i className="icon-pinterest"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-vimeo">
      //               <i className="icon-vimeo"></i>
      //               <i className="icon-vimeo"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-github">
      //               <i className="icon-github"></i>
      //               <i className="icon-github"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-yahoo">
      //               <i className="icon-yahoo"></i>
      //               <i className="icon-yahoo"></i>
      //             </a>

      //             <a href="#" className="social-icon si-small si-borderless si-linkedin">
      //               <i className="icon-linkedin"></i>
      //               <i className="icon-linkedin"></i>
      //             </a>
      //           </div>

      //           <div className="clear"></div>

      //           <i className="icon-envelope2"></i> info@canvas.com <span className="middot">&middot;</span> <i className="icon-headphones"></i> +1-11-6541-6369 <span className="middot">&middot;</span> <i className="icon-skype2"></i> CanvasOnSkype
      //         </div>

      //       </div>

      //     </div>
      //   </div>

      // </footer>

      <footer id="footer" className="dark">
        <div className="container">
          <div className="footer-widgets-wrap">
            <div className="row col-mb-50">
              <div className="col-lg-6">
                <div className="widget clearfix">
                  <Logo />
                  {/* <img src="images/footer-widget-logo.png" alt="Image" className="footer-logo" /> */}
                  {/* <p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.</p> */}
                  <div className="py-2" style={{
                    background: `url('images/world-map.png') no-repeat center center`
                  }}
                  >
                    <div className="row col-mb-30">
                      <div className="col-6">
                        <address className="mb-0">
                          <abbr title="Headquarters" style={{display: `inline-block`, marginBottom: `7px`}}><strong>Адрес:</strong></abbr><br/>
                          170002, г. Тверь,<br/>
                          пр-т Чайковского, д. 19<br/>
                        </address>
                      </div>
                      <div className="col-6">
                        <abbr title="Phone Number"><strong>Телефон:</strong></abbr> (4822) 34-58-19<br/>
                        <abbr title="Fax"><strong>Факс:</strong></abbr> (4822) 34-58-19<br/>
                        <abbr title="Email Address"><strong>Email:</strong></abbr> tuklvova@bk.ru
                      </div>
                    </div>
                  </div>
                  <a href="https://vk.com/tuklvova" target='blank'className="social-icon si-small si-rounded topmargin-sm si-facebook">
                    <i className="icon-vk1"></i>
                    <i className="icon-vk1"></i>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="widget clearfix">
                  <h4>Последние новости</h4>
                  <div className="posts-sm row col-mb-30" id="post-list-footer">
                    <div className="entry col-12">
                      <div className="grid-inner row">
                        <div className="col">
                          <div className="entry-title">
                            <h4><a href="#">Lorem ipsum dolor sit amet, consectetur</a></h4>
                          </div>
                          <div className="entry-meta">
                            <ul>
                              <li>10th July 2021</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry col-12">
                      <div className="grid-inner row">
                        <div className="col">
                          <div className="entry-title">
                            <h4><a href="#">Elit Assumenda vel amet dolorum quasi</a></h4>
                          </div>
                          <div className="entry-meta">
                            <ul>
                              <li>10th July 2021</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="entry col-12">
                      <div className="grid-inner row">
                        <div className="col">
                          <div className="entry-title">
                            <h4><a href="#">Debitis nihil placeat, illum est nisi</a></h4>
                          </div>
                          <div className="entry-meta">
                            <ul>
                              <li>10th July 2021</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="widget quick-contact-widget form-widget clearfix">
                  <h4>Связаться с нами</h4>
                  <div className="form-result"></div>
                  <form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" className="quick-contact-form mb-0">
                    <div className="form-process">
                      <div className="css3-spinner">
                        <div className="css3-spinner-scaler"></div>
                      </div>
                    </div>
                    <div className="input-group mx-auto">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="icon-user"></i></div>
                      </div>
                      <input type="text" className="required form-control" id="quick-contact-form-name" name="quick-contact-form-name" defaultValue="" placeholder="Ф.И.О." />
                    </div>
                    <div className="input-group mx-auto">
                      <div className="input-group-prepend">
                        <div className="input-group-text"><i className="icon-email2"></i></div>
                      </div>
                      <input type="text" className="required form-control email" id="quick-contact-form-email" name="quick-contact-form-email" defaultValue="" placeholder="Адрес электронной почты" />
                    </div>
                    <textarea className="required form-control input-block-level short-textarea" id="quick-contact-form-message" name="quick-contact-form-message" rows="4" cols="30" placeholder="Сообщение"></textarea>
                    <input type="text" className="d-none" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" defaultValue="" />
                    <input type="hidden" name="prefix" defaultValue="quick-contact-form-"/>
                    <button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" className="btn btn-danger m-0" defaultValue="submit">Отправить письмо</button>

                  </form>

                </div>

              </div>
            </div>

          </div>
        </div>
        <div id="copyrights">
          <div className="container">

            <div className="w-100 text-center">
              <div className="copyrights-menu copyright-links clearfix">
                <a href="#">Home</a>/<a href="#">About</a>/<a href="#">Features</a>/<a href="#">Portfolio</a>/<a href="#">FAQs</a>/<a href="#">Contact</a>
              </div>
              Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer