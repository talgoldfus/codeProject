import $ from 'jquery'

function postFinalAnalytics(boardInfo, optionsInfo){
    const URL = `http://localhost:3000/api/v1/game_options/`
    return $.ajax({
      url:URL,
      type:"POST",
      headers: { Authorization: localStorage.getItem('token')},
      data: JSON.stringify({boardInfo, optionsInfo}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
      })
}

export default postFinalAnalytics

