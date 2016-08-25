import React, { Component, PropTypes } from 'react'
import AddCategoryForm from './AddCategoryForm'
import SubmitCategory from './SubmitCategory'
import AddQuestionFormContainer from '../../containers/AddQuestionFormContainer'

class AddCategory extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  render() {
    const submitFinal = this.props.seedCategory
    const { page } = this.state

    return (<div>
        {page === 1 && <AddCategoryForm previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 2 && <AddQuestionFormContainer previousPage={this.previousPage} page={page} onSubmit={this.nextPage}/>}
        {page === 3 && <AddQuestionFormContainer previousPage={this.previousPage} page={page} onSubmit={this.nextPage}/>}
        {page === 4 && <AddQuestionFormContainer previousPage={this.previousPage} page={page} onSubmit={this.nextPage}/>}
        {page === 5 && <AddQuestionFormContainer previousPage={this.previousPage} page={page} onSubmit={this.nextPage}/>}
        {page === 6 && <AddQuestionFormContainer previousPage={this.previousPage} page={page} onSubmit={this.nextPage}/>}
        {page === 7 && <SubmitCategory previousPage={this.previousPage} onSubmit={submitFinal}/>}
      </div>
    )
  }
}


export default AddCategory
