import React from 'react'

class PageTitle extends React.Component {
  render() {
    return(
     <section id="page-title">
		  	<div className="container clearfix">
		  		<h1>{this.props.title}</h1>
		  		<ol className="breadcrumb">
		  			<li className="breadcrumb-item"><a href="#">Главная</a></li>
		  			<li className="breadcrumb-item active" aria-current="page">Студентам</li>
		  		</ol>
		  	</div>
		  </section>
    )
  }
}

export default PageTitle