import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Documents from '../components/Documents/Documents.jsx'
import Divider from '../components/Divider/Divider.jsx'
import pupa from '../utils/applicationRulesFiles.js'

class ApplicationRules extends React.Component {

  render() {
    return(
      <div>
        <PageTitle
          title={'Правила приёма'}
        />
        <Divider icon={'icon-circle'}/>
        <Documents
          title={'Документы'}
          data={pupa}
        />
      </div>
    )
  }
}

export default ApplicationRules