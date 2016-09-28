// import axios from 'axios'
import $ from 'jquery'

export default function getBoard(id){  
  return function(dispatch) {
    $.ajax({
    url: 'http://localhost:3000/api/v1/boards/'+id,
    type: 'GET',
    headers: { Authorization: localStorage.getItem('token')}
  }).done(function(response) {
      console.log(response)
        dispatch({type:'GET_BOARD', payload: response})
      })
    }        
  }
