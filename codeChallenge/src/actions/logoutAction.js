import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function logOut(id){
  return $.ajax({
      url: 'http://localhost:3000/api/v1/users/' + id,
      type: 'DELETE',
      headers: { authorization: localStorage.getItem('token')}
  }).done(() => {
        localStorage.clear()
        browserHistory.push('/')
    })
}        
