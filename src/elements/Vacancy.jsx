import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Documents from '../components/Documents/Documents.jsx'
import vacancy from '../utils/vacancyFiles.js'
import Divider from '../components/Divider/Divider.jsx'

class Vacancy extends React.Component {
  render() {
    return(
      <div>
        <PageTitle
          title={'Вакантные места для приема (перевода)'}
        />
        <Divider
          icon={'icon-circle'}
        />
        <Documents
          title={'Документы'}
          data={vacancy}
        />
      </div>
    )
  }
}

export default Vacancy