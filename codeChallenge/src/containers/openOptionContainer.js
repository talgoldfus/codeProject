import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import correctAnswer from '../actions/optionAction'
import OpenOption from '../components/OpenOption'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({evaluateAnswer: correctAnswer}, dispatch)
}

// function mapStateToProps(state) {
//     return {state}
// }

const openOptionContainer = connect(null, mapDispatchToProps)(OpenOption)

export default openOptionContainer
