import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import OpenOption from '../components/OpenOption'
import analyticsAction from '../actions/updateAnalytics'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({evaluateAnswer: correctAnswer, updateAnalytics: analyticsAction}, dispatch)
}

function mapStateToProps(state) {
  return {token: state.board.token}
}

const openOptionContainer = connect(mapStateToProps, mapDispatchToProps)(OpenOption)

export default openOptionContainer
