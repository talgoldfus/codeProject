import $ from 'jquery'

export default function getCurrUser(){  
  return function(dispatch) {
    $.ajax({
    url: 'http://localhost:3000/api/v1/populate',
    type: 'GET',
    headers: { authorization: localStorage.getItem('token')}
  }).done(function(response) {
      console.log(response)
      localStorage.setItem('userName', response.email)
      localStorage.setItem('userId', response.id)
        dispatch({type:'GET_CURR_USER', payload: response})
      })
    }        
  }