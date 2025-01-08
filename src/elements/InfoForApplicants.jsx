import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Contact from '../components/Contact/Contact.jsx'


class InfoForApplicants extends React.Component {
  render() {
    return(
      <div>
        <PageTitle title={'Информация о приёме'}/>
        <Contact />
      </div>
    )
  }
}

export default InfoForApplicants
