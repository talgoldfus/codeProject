import axios from 'axios'

function getTopics(){
    const url = 'http://localhost:3000/api/v1/boards'
    const request = axios.get(url)
  return {
    type:'GET_TOPICS',
    payload: request
  }

}

export default getTopics
