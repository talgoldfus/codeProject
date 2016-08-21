import axios from 'axios'

function getTopics(){
  //current user id to be inserted into url 
    const url = 'http://localhost:3000/api/v1/userfind'
    const request = axios.get(url)
    
  return {
    type:'GET_CURRENT_USER',
    payload: request
  }

}

export default getTopics
