import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'

class BasicInfo extends React.Component {
  render() {
    return(
      <div>
        <PageTitle title={'Основные сведения'}/>
        <section id="content">
          <div className="content-wrap">
            <div className="container clearfix">
              <div className="single-post mb-0">
                <div className="entry clearfix">
                  <div className="entry-content mt-0">
                    <p style={{textIndent: '50px'}}>
                      Государственное бюджетное образовательное учреждение среднего 
                      профессионального образования Тверской области «Тверской колледж 
                      культуры имени Н.А. Львова» существует на рынке образовательных услуг 55 лет. 
                      Колледж был основан в 1965 году как Калининское областное 
                      культурно-просветительное училище, в 1989 году было переименовано в 
                      Калининское училище культуры, затем, в том же году – в училище 
                      культуры и искусства. В 1994 году училище было переименовано в Тверской 
                      колледж культуры и искусства, а в 2002 году Распоряжением Губернатора 
                      Тверской области Тверскому училищу-колледжу культуры присвоено имя Н.А. Львова.
                    </p>
                    <p>
                      <strong>Учредителем</strong> колледжа является 
                      <strong> Министерство культуры Тверской области</strong>,
                      расположенный по адресу: <br/> 
                      <i className='icon-location'/> 170002, пр-т Чайковского, 26<br/>
                      <i className='icon-phone'/> +7 (4822) 34-28-54<br/> 
                      <i className='icon-mail'/> info@tvercult69.ru
                    </p>
                    <p>
                      <strong>Министр культуры Тверской области - Ксения Олеговна Глинка</strong>
                    </p>
                    <p>
                      <strong>Адрес сайта учредителя в сети «Интернет»:</strong><br/> 
                      <a href="http://культура.тверскаяобласть.рф">http://культура.тверскаяобласть.рф</a>
                    </p>
                    <p>
                      <strong>Учебный корпус</strong> колледжа расположен по адресу: <br/>
                      <i className='icon-location'/> 170002, г. Тверь, пр-т Чайковского, 19<br/>
                      <i className='icon-phone'/> +7 (4822) 34-58-19<br/>
                      <i className='icon-mail'/> tuklvova@bk.ru
                    </p>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th colSpan='2'>График работы отдела по работе со студентами</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Понедельник</td>
                          <td>08:30 - 17:00</td>
                        </tr>
                        <tr>
                          <td>Вторник</td>
                          <td>08:30 - 17:00</td>
                        </tr>
                        <tr>
                          <td>Среда</td>
                          <td>08:30 - 17:00</td>
                        </tr>
                        <tr>
                          <td>Четверг</td>
                          <td>08:30 - 17:00</td>
                        </tr>
                        <tr>
                          <td>Пятница</td>
                          <td>08:30 - 17:00</td>
                        </tr>
                        <tr>
                          <td>Суббота</td>
                          <td>Выходной</td>
                        </tr>
                        <tr>
                          <td>Воскресенье</td>
                          <td>Выходной</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>
                      <i className='icon-phone'/> +7 (4822) 34-38-29
                    </p>
                    <p>
                      <strong>Общежитие колледжа</strong> расположено недалеко от учебного корпуса по адресу: <br/>
                      <i className='icon-location'/> г. Тверь, ул. Орджоникидзе, д. 25<br/>
                      <i className='icon-phone'/> +7 (4822) 58-16-40
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
			  </section>
      </div>
    )
  }
}

export default BasicInfo