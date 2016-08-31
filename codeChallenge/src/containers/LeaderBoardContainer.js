import { connect } from 'react-redux'
import getLeaderBoard from '../actions/leaderBoard'
import LeaderBoard from '../components/LeaderBoard'

function mapStateToProps(state) {
    return {
      leaderBoard: state.user.leader_board
    }
}

const LeaderBoardContainer = connect(mapStateToProps, {getLeaderBoard: getLeaderBoard})(LeaderBoard)

export default LeaderBoardContainer
