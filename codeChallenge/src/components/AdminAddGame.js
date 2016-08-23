import React, { Component, PropTypes } from 'react'
import AddCategoryForm from './AddCategoryForm'
import AddQuestionFormContainer from '../containers/AddQuestionFormContainer'
import AddBoardForm from './AddBoardForm'
import AddOptionForm from './AddOptionForm'




class AdminAddGameForm extends Component {
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
    const { onSubmit } = this.props
    const { page } = this.state

    return (<div>
        {page === 1 && <AddCategoryForm previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 2 && <AddQuestionFormContainer previousPage={this.previousPage} page={page-1} onSubmit={this.nextPage}/>}
        {page === 3 && <AddQuestionFormContainer previousPage={this.previousPage} page={page-1} onSubmit={this.nextPage}/>}

        {page === 4 && <AddOptionForm previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    )
  }
}

AdminAddGameForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default AdminAddGameForm
