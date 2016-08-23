import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getBoardAction from '../actions/getBoardAction'
import postFinalAnalytics from '../actions/postFinalAnalytics'
import Board from '../components/Board'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getBoard: getBoardAction, finalAnalytics: postFinalAnalytics}, dispatch)
}

function mapStateToProps(state, ownProps) {
  
   return {
     gameBoard: state.board,
     ownProps: ownProps,
     optionIds: state.analytics,
     finished: state.analytics.options.length
   }
}

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board)

export default BoardContainer
