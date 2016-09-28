import $ from 'jquery'
import { browserHistory } from 'react-router'

export default function signinUser(formProps) {
  return function(dispatch){
    var user = formProps.email || formProps.user
    var password = formProps.password
    $.ajax({
      url: "http://localhost:3000/auth_user",
      method: "POST",
      data: {"email": `${user}`, "password": `${password}`}
      }).done(function (response) {
      console.log(response);
        localStorage.setItem('token', response.auth_token)
        dispatch({type: 'LOG_IN', payload: true})
        browserHistory.push('game')        
    })
  }
}
