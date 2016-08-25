import $ from 'jquery'
import { browserHistory } from 'react-router'


export default function signupUser(formProps) {
  return function(dispatch) {
    $.ajax({
      url: 'http://localhost:3000/api/v1/users',
      type:"POST",
      data: JSON.stringify({email: formProps.email, password: formProps.password}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    }).done(() => {
      debugger
      $.ajax({
        url: "http://localhost:3000/auth_user",
        method: "POST",
        data: {"email": `${formProps.email}`, "password": `${formProps.password}`}
        }).done(function (response) {
        console.log(response);
          localStorage.setItem('token', response.auth_token)
          dispatch({type: 'LOG_IN', payload: true})
          browserHistory.push('game')
        })
      })
    }
  }
