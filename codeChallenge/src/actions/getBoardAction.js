import axios from 'axios'

export  default function getTopics(id){
    const url = 'http://localhost:3000/api/v1/boards/'+id
    const request = axios.get(url)
  return {
    type:'GET_BOARD',
    board: request
  }

}
