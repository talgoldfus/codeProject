import $ from 'jquery'

function postFinalAnalytics(userId, optionIds){
    const URL = `http://localhost:3000/api/v1/game_options/`
    return $.ajax({
      url:URL,
      type:"POST",
      data: JSON.stringify({userId: userId, optionIds: optionIds}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
      })
}

export default postFinalAnalytics

