import { connect } from 'react-redux'
import AddCategory from '../components/adminForms/AddCategory'
import seedCategory from '../actions/seedCategory'

const addCategoryContainer = connect(null, {seedCategory: seedCategory})(AddCategory)
export default addCategoryContainer
