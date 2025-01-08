import React from 'react'

class FooterStick extends React.Component {
  render() {
    return(
      <div className="section dark footer-stick" style={{backgroundColor: `#444`, padding: `35px 0`}}>
        <div className="container">
          <div className="row col-mb-30">
            <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-line-head" style={{color: `rgba(255,255,255,0.4)`}}></i>
              <div className="clear"></div>
              <div className="counter counter-small" style={{fontFamily: `Lato, sans-serif`, fontSize: `21px`, letterSpacing: `3px`}}><span data-from="100" data-to="234833" data-refresh-interval="50" data-speed="2000"></span></div>
              <h5 style={{fontSize: `11px`, color: `#999`, marginTop: `3px`}}>Выпускников</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-realestate-document" style={{color: `rgba(255,255,255,0.4)`}}></i>
              <div className="clear"></div>
              <div className="counter counter-small" style={{fontFamily: `Lato, sans-serif`, fontSize: `21px`, letterSpacing: `3px`}}><span data-from="0" data-to="25" data-refresh-interval="5" data-speed="2000"></span></div>
              <h5 style={{fontSize: `11px`, color: `#999`, marginTop: `3px`}}>Образовательных программ</h5>
            </div>
            {/* <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-line2-speech" style="color: rgba(255,255,255,0.4);"></i>
              <div className="clear"></div>
              <div className="counter counter-small" style="font-family:'Lato', sans-serif; font-size: 21px; letter-spacing: 3px;"><span data-from="100" data-to="56895" data-refresh-interval="50" data-speed="2000"></span></div>
              <h5 style="font-size: 11px; color: #999; margin-top: 3px;">Reviews Received</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-line2-cup" style="color: rgba(255,255,255,0.4);"></i>
              <div className="clear"></div>
              <div className="counter counter-small" style="font-family:'Lato', sans-serif; font-size: 21px; letter-spacing: 3px;"><span data-from="100" data-to="3431" data-refresh-interval="50" data-speed="2000"></span></div>
              <h5 style="font-size: 11px; color: #999; margin-top: 3px;">Drinks Gulped</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-line2-rocket" style="color: rgba(255,255,255,0.4);"></i>
              <div className="clear"></div>
              <div className="counter counter-small" style="font-family:'Lato', sans-serif; font-size: 21px; letter-spacing: 3px;"><span data-from="100" data-to="665978" data-refresh-interval="50" data-speed="2000"></span></div>
              <h5 style="font-size: 11px; color: #999; margin-top: 3px;">Items Shipped</h5>
            </div>
            <div className="col-lg-2 col-md-4 col-6">
              <i className="i-large i-plain icon-line2-support" style="color: rgba(255,255,255,0.4);"></i>
              <div className="clear"></div>
              <div className="counter counter-small" style="font-family:'Lato', sans-serif; font-size: 21px; letter-spacing: 3px;"><span data-from="100" data-to="459844" data-refresh-interval="50" data-speed="2000"></span></div>
              <h5 style="font-size: 11px; color: #999; margin-top: 3px;">Emails Replied</h5>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default FooterStick
