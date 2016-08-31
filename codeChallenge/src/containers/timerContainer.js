import { connect } from 'react-redux'
import correctAnswer from '../actions/optionAction'
import analyticsAction from '../actions/updateAnalytics'
import Timer from '../components/Timer'


function mapStateToProps(state) {
    return {userId: state.board.players[0].userId}
}

const timerContainer = connect(mapStateToProps, {
  evaluateAnswer: correctAnswer,
  updateAnalytics: analyticsAction
})(Timer)

export default timerContainer
