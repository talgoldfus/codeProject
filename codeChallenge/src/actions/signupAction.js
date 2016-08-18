import $ from 'jquery'

export default function signupUser(user, password){
    const URL = 'http://localhost:3000/api/v1/users'
    return $.ajax({
      url: URL,
      type:"POST",
      data: JSON.stringify({email: user, password: password}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
      })
}