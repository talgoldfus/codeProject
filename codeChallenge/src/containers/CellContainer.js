import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import removeLinkAction from '../actions/removeLinkAction'
import Cell from '../components/Cell'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({removeLink: removeLinkAction }, dispatch)
}



const CellContainer = connect(null, mapDispatchToProps)(Cell)

export default CellContainer
