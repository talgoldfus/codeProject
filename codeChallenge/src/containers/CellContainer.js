import { connect } from 'react-redux'
import removeLinkAction from '../actions/removeLinkAction'
import Cell from '../components/Cell'

const CellContainer = connect(null, {removeLink: removeLinkAction})(Cell)

export default CellContainer
