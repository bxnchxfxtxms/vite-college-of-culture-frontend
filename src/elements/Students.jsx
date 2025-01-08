import React from 'react'
import PageTitle from '../components/PageTitle/PageTitle.jsx'
import Article from '../components/Article/Article.jsx'

class Students extends React.Component {
  render() {
    return(
      <div>  
        <PageTitle title={'Студентам'}/>
        <Article/>
      </div>
    )
  }
}

export default Students