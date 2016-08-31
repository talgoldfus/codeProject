import { connect } from 'react-redux'
import getBoardAction from '../actions/getBoardAction'
import postFinalAnalytics from '../actions/postFinalAnalytics'
import Board from '../components/Board'



function mapStateToProps(state, ownProps) {

   return {
     gameBoard: state.board,
     ownProps: ownProps,
     optionIds: state.analytics,
     finished: state.analytics.options.length
   }
}

const BoardContainer = connect(mapStateToProps, {getBoard: getBoardAction, finalAnalytics: postFinalAnalytics})(Board)

export default BoardContainer
