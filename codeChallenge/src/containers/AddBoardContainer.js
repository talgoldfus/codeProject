import { connect } from 'react-redux'
import getCategoriesAction from '../actions/getCategoriesAction'
import AddBoardForm from '../components/adminForms/AddBoardForm'

const AddBoardContianer = connect(null,{getCategories: getCategoriesAction})(AddBoardForm)

export default AddBoardContianer
