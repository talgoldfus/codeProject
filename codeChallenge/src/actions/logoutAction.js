import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function logOut(){
  return $.ajax({
      url: 'http://localhost:3000/api/v1/delete_token',
      type: 'GET',
      headers: { Authorization: localStorage.getItem('token')}
  }).done(() => {
        localStorage.clear()
        browserHistory.push('/')
    })
}        
