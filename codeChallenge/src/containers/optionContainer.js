import { connect } from 'react-redux'
import correctAnswer from '../actions/optionAction'
import analyticsAction from '../actions/updateAnalytics'
import Option from '../components/Option'

function mapStateToProps(state) {
    return {userId: state.board.players[0].userId}
}

const optionContainer = connect(mapStateToProps, {
  evaluateAnswer: correctAnswer,
  updateAnalytics: analyticsAction
})(Option)

export default optionContainer
