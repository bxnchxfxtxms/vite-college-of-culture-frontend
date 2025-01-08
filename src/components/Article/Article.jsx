import React from 'react'
import Documents from '../Documents/Documents.jsx'
import studentsFiles from '../../utils/studentsFiles.js'

class Article extends React.Component {
  render() {
    return(
			<section id="content">
				<div className="content-wrap">
					<div className="container clearfix">
						<div className="single-post mb-0">
							<div className="entry clearfix">
								<div className="entry-title">
									<h2>
										Культура и образование
									</h2>
								</div>
								<div className="entry-meta">
									<ul>
										<li>
											<i className="icon-calendar3"/>
												10th July 2021
											</li>
									</ul>
								</div>
								<div className="entry-content mt-0">
									<blockquote>
										<p>
											«Теперь «образование» теснейшим образом связано с понятием культуры
											и обозначает в конечном итоге специфический человеческий способ преобразования природных задатков и возможностей».
											Х.-Г. Гадамер. «Истина и метод»
										</p>
									</blockquote>
									<p style={{textIndent: '50px'}}>
										Латинский термин «культура» означает взращивание, совершенствование чего-либо. 
										Соответственно, и применительно к человеку это взращивание, совершенствование, формирование его образа. 
										Принимая во внимание данную трактовку, культура выступает предпосылкой и результатом образования человека. 
										В процессе образования человек осваивает культурные ценности (историческое наследие искусства, архитектуры). 
										Поскольку достижения познавательного характера представляют собой совокупность материального и духовного достояния человечества, 
										постольку освоение исходных научных положений также является обретением культурных ценностей. 
										В итоге было сформулировано дидактическое понятие культуры — обучение и воспитание молодого поколения средствами культуры. 
										Процесс взаимодействия, как присвоение и создание человеком новых культурных ценностей, в рамках образовательной системы является созиданием. 
										То есть связан с культурой в ее динамическом аспекте.
									</p>

									<p>Полезная ссылка:
										<a href="http://www.moeobrazovanie.ru/">
											http://www.moeobrazovanie.ru/
										</a>
									</p>
								</div>
							</div>
						</div>
						<Documents
							title={'Практика студентов'}
							data={studentsFiles}/>
					</div>
				</div>
			</section>
    )
  }
}

export default Article
