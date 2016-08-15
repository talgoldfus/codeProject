import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getBoardAction from '../actions/getBoardAction'
import Board from '../components/Board'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBoard: getBoardAction}, dispatch)
}

function mapStateToProps(state) {
    return {
      gameBoard: state.board
    }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
