import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getLeaderBoard from '../actions/leaderBoard'
import LeaderBoard from '../components/LeaderBoard'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getLeaderBoard: getLeaderBoard}, dispatch)
}

function mapStateToProps(state) {
  debugger; 
    return {
      leaderBoard: state.user.leader_board
    }
}

const LeaderBoardContainer = connect(mapStateToProps, mapDispatchToProps)(LeaderBoard)

export default LeaderBoardContainer
