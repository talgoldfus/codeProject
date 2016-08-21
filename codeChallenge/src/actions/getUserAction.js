import axios from 'axios'

function getTopics(id){
  //current user id to be inserted into url 
    const url = 'http://localhost:3000/api/v1/game_options/user/3'
    const request = axios.get(url)
    
  return {
    type:'GET_USER',
    payload: request
  }

}

export default getTopics
