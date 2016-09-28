import { connect } from 'react-redux'
import correctAnswer from '../actions/optionAction'
import OpenOption from '../components/OpenOption'
import analyticsAction from '../actions/updateAnalytics'

function mapStateToProps(state) {
  return {token: state.board.token}
}

const openOptionContainer = connect(mapStateToProps, {evaluateAnswer: correctAnswer, updateAnalytics: analyticsAction})(OpenOption)

export default openOptionContainer
