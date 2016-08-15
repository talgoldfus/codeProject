import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getBoardAction from '../actions/getBoardAction'
import Board from '../components/Board'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBoard: getBoardAction}, dispatch)
}

function mapStateToProps(state, ownProps) {
    return {
      gameBoard: state.board,
      ownProps: ownProps
    }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
