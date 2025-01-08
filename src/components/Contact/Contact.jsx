import React from 'react'
import Documents from '../Documents/Documents.jsx'
import lupa from '../../utils/infoForApplicantsFiles.js'


class Contact extends React.Component {
  render() {
    return(
      <section id="content">
        <div className="content-wrap">
          <div className="container clearfix">
            <div className="row col-mb-50">
              <div className="col-sm-6 col-lg-3">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="#"><i className="icon-map-marker2"></i></a>
                  </div>
                  <div className="fbox-content">
                    <h3>Адрес колледжа<span className="subtitle">170002, г. Тверь, проспект Чайковского, д.19</span></h3>  
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="#"><i className="icon-phone3"></i></a>
                  </div>
                  <div className="fbox-content">
                    <h3>Телефон<span className="subtitle">+7 (4822) 32-05-49</span></h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="#"><i className="icon-line2-globe"></i></a>
                  </div>
                  <div className="fbox-content">
                    <h3>Сайт<span className="subtitle">тверьарткульт.рф</span></h3>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-3">
                <div className="feature-box fbox-center fbox-bg fbox-plain">
                  <div className="fbox-icon">
                    <a href="#"><i className="icon-vk2"></i></a>
                  </div>
                  <div className="fbox-content">
                    <h3>Группа ВК<span className="subtitle">http://vk.com/tuklvova</span></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider divider-center"><i className="icon-circle"></i></div>
            <div className="style-msg" style={{backgroundColor: `#EEE`}}>
              <div className="sb-msg"><i className=""></i>Прием документов на дневное и заочное отделение <strong>с 1 июня.</strong></div>
            </div>
            <div className="style-msg" style={{backgroundColor: `#EEE`}}>
              <div className="sb-msg"><i className=""></i>
                График работы приемной комиссии: <br />
                <strong>Понедельник - пятница с 10.00 до 17.00</strong>
              </div>
            </div>
            {/* <div className="fancy-title title-border-color">
						  <h1>Документы</h1>
					  </div> */}
            <div className="divider divider-center"><i className="icon-circle"></i></div>
            <Documents
              title='Документы'
              data={lupa}
            />
            {/* <div className="title-block">
						  <h1>Документы</h1>
					  </div>
					<div className="col-15">
						<ul className="iconlist">
							<a href="#"><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Приказ о зачислении ЭФО по договору</li></a>
							<a href="#" download><li><i className="icon-download"></i> Приказ о зачислении ЭФО бюджет</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Приказ о зачислении</li></a>
							<a href="#" download><li><i className="icon-download"></i> Приказ о дополнительном наборе</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Расписание вступительных экзаменов очно</li></a>
							<a href="#" download><li><i className="icon-download"></i> Расписание вступительных экзаменов заочно</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Количество поданных заявлений (бюджет)</li></a>
							<a href="#" download><li><i className="icon-download"></i> Заявление от абитуриента</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Информация о прохождении мед.осмотра</li></a>
							<a href="#" download><li><i className="icon-download"></i> Информация о формах проведения 2024</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Особенности проведения вступительных испытаний для инвалидов и лиц с ОВЗ</li></a>
							<a href="#" download><li><i className="icon-download"></i> Перечень вступительных испытаний</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Перечень специальностей по которым колледж объявляет прием</li></a>
							<a href="#" download><li><i className="icon-download"></i> Положение о формах проведения вступительных испытаний</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Требования к уровню образования, которое необходимо для поступления в колледж</li></a>
							<a href="#" download><li><i className="icon-download"></i> Изменения в Правила приема</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Информация о наличии общежития 2024</li></a>
							<a href="#" download><li><i className="icon-download"></i> Количество бюджетных мест для поступления</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Количество мест по договорам об оказании платных образовательных услуг</li></a>
							<a href="#" download><li><i className="icon-download"></i> Общее количество мест для приема по каждой специальности</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Правила подачи и рассмотрения апелляций по результатам вступительных испытаний</li></a>
							<a href="#" download><li><i className="icon-download"></i> Правила приёма в колледж 2024</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Приказ о платных услугах</li></a>
							<a href="#" download><li><i className="icon-download"></i> Образец договора</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Стипендии и меры социальной поддержки обучающихся в 2023 году</li></a>
							<a href="#" download><li><i className="icon-download"></i> Условия приема на обучения по договорам</li></a>
							<a href="#" download><li style={{backgroundColor: `#EEE`}}><i className="icon-download"></i> Положение об апеляционной комиссии</li></a>
							<a href="#" download><li><i className="icon-download"></i> Телефоны горячих линий</li></a>
						</ul>
					</div> */}
            <div className="divider divider-center"><i className="icon-phone"></i></div>
          </div>
          <section id="content">
            <div className="content-wrap">
              <div className="container">
                <div className="row col">
                  <div className="col-md">
					        	<strong>Министерство культуры Тверской области</strong><br/>
					        	<address>
                      г. Тверь, пр. Чайковского, д. 26
					        	</address>
					        	<abbr title="Phone Number"><strong>Телефон:</strong></abbr> +7 (4822) 34-28-54<br/>
					        </div>
                  <div className="col-md">
					        	<strong>Управление надзора и контроля в сфере образования (в структуре Министерства образования Тверской области)</strong><br/>
					        	<address>
                      г. Тверь, ул. Советская, д.23
					        	</address>
					        	<abbr title="Phone Number"><strong>Телефон:</strong></abbr> +7 (4822) 32-10-53<br/>
					        </div>
                  <div className="col-md">
					        	<strong>Федеральная служба по надзору в сфере образования и науки (Рособрнадзор)</strong><br/><br/>
					        	<abbr title="Phone Number"><strong>Телефон:</strong></abbr> +7 (495) 984-89-19
					        </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    )
  }
}

export default Contact








 

