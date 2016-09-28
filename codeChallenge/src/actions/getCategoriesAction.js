import axios from 'axios'

function getCategories(){
    const url = 'http://localhost:3000/api/v1/categories'
    const request = axios.get(url)

  return {
    type:'GET_CATEGORIES',
    payload: request
  }

}

export default getCategories
