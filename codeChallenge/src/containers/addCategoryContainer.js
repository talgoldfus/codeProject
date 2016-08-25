import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import AddCategory from '../components/adminForms/AddCategory'
import seedCategory from '../actions/seedCategory'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({seedCategory: seedCategory}, dispatch)
}


const addCategoryContainer = connect(null, mapDispatchToProps)(AddCategory)

export default addCategoryContainer
