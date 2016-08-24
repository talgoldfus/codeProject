import axios from 'axios'

function leaderBoard(){
  //current user id to be inserted into url 
    const url = 'http://localhost:3000/api/v1/analytics'
    const request = axios.get(url)
    
  return {
    type:'GET_LEADER_BOARD',
    payload: request
  }

}

export default leaderBoard
