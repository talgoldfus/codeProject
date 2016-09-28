import { connect } from 'react-redux'
import CategorySelector from '../components/CategorySelector'

function mapStateToProps(state) {
    return {
      categories: state.categories
    }
}

const CategorySelectorContainer = connect(mapStateToProps, null)(CategorySelector)

export default CategorySelectorContainer
