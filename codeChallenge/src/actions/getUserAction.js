import $ from 'jquery'

export default function getUser(id){
  return function(dispatch) {
    $.ajax({
    url: 'http://localhost:3000/api/v1/users/' + id,
    type: 'GET',
    headers: { authorization: localStorage.getItem('token')}
  }).done(function(response) {
      console.log(`user action = ${response}`)
        dispatch({type:'GET_USER', payload: response})
      })
    }        
  }
