import $ from 'jquery'

export default function authAction(user, password) {
  $.ajax({
    url: "http://localhost:3000/api/v1/authenticate",
    method: "POST",
    data: {"auth": {"email": `${user}`, "password": `${password}`}}
    }).done(function (response) {
    console.log(response);
      return {
        type: 'LOG_IN',
        payload: response
      }
    
  });
}

 