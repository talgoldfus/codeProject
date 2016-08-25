import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getCategoriesAction from '../actions/getCategoriesAction'
import AddBoardForm from '../components/adminForms/AddBoardForm'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCategories: getCategoriesAction,
  }, dispatch)
}

const AddBoardContianer = connect(null, mapDispatchToProps)(AddBoardForm)

export default AddBoardContianer
