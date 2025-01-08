import React from 'react'
import logoWhite from '../../images/header-logo-white.svg'

class Logo extends React.Component {
  render() {
    return (
      <img className={`
        CollegeLogo
        opacity-animation opacity-animation_type_darkening`}
        src={logoWhite}
        alt="Логотип сайта"
      />
    )
  }
}

export default Logo
