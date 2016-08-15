import axios from 'axios'

export default function getBoard(id){
    const url = 'http://localhost:3000/api/v1/boards/'+id
    const request = axios.get(url)
    debugger; 
  return {
    type:'GET_BOARD',
    board: request
  }

}
