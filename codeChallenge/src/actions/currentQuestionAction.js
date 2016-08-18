import axios from 'axios'

export default function getCurrentQuestionOptions(id) {
    const url = 'http://localhost:3000/api/v1/questions/'+id
    const request = axios.get(url)
  return {
    type:'GET_CURRENT_QUESTION',
    payload: request
  }
}
