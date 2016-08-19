import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import OpenOption from '../components/OpenOption'
import analyticsAction from '../actions/updateAnalytics'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({evaluateAnswer: correctAnswer, updateAnalytics: analyticsAction}, dispatch)
}

// function mapStateToProps(state) {
//     return {state}
// }

const openOptionContainer = connect(null, mapDispatchToProps)(OpenOption)

export default openOptionContainer
