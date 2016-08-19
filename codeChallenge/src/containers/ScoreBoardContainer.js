import { connect } from 'react-redux'
import ScoreBoard from '../components/ScoreBoard'

function mapStateToProps(state) {
   return { gameBoard: state.board , gameAnalytics: state.analytics}
}

const ScoreBoardContainer = connect(mapStateToProps, null)(ScoreBoard)

export default ScoreBoardContainer
