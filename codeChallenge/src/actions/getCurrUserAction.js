import $ from 'jquery'

export default function getCurrUser(id){
  return function(dispatch) {
    $.ajax({
    url: 'http://localhost:3000/api/v1/populate',
    type: 'GET',
    headers: { authorization: localStorage.getItem('token')}
  }).done(function(response) {
      console.log(response)
        dispatch({type:'GET_USER', payload: response})
      })
    }        
  }