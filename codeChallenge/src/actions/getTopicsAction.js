import axios from 'axios'

export  default function getTopics(){
  debugger
    const url = 'http://localhost:3000/api/v1/boards'
    const request = axios.get(url)
  return {
    type:'GET_TOPICS',
    topics: request
  }

}
