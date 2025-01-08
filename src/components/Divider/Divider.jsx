import React from 'react'

class Divider extends React.Component {
  render() {
    return(
      <div className='container claerfix'>
        <div className='divider divider-center'>
          <i className={this.props.icon}/>
        </div>
      </div>
    )
  }
}

export default Divider