import React from 'react'
// import { pupa, lupa } from '../../utils/infoForApplicantsFiles.js'
import zalupa from '../../utils/zalupa.js'
import _ from 'lodash'


class Documents extends React.Component {

	handleClick = () => {
		console.log(_.shuffle(zalupa))
	}

	handleClick1 = () => {
		console.log('Хуяк')
	}

  render() {
    return(
      <div className="container">
        <div className="title-block">
					<h1>{this.props.title}</h1>
				</div>
					<div className="col-15">
						<ul className="iconlist">
							{/* <a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Приказ о зачислении ЭФО по договору</li></a>
							<a href="#" download><li><i className="icon-download"></i> Приказ о зачислении ЭФО бюджет</li></a> */}
							{this.props.data.map(item =>(
								<a
									key={item.id}
									href="#"
									download>
										<li
											style={!(item.id % 2 === 0) ? {backgroundColor: `#EEE`} : {backgroundColor: ``}}
										>
											<i className="icon-download"/>
												{item.text}
										</li>
									</a>
							))}
						</ul>
						{/* <button className='button' onClick={this.handleClick}>Жмяк</button> */}
						{/* <button className='button' onClick={this.handleClick1}>Хуяк</button> */}
					</div>
      </div>
	
    )
  }
}

export default Documents