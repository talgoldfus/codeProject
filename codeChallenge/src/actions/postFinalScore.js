import $ from 'jquery'

function postFinalScore(userID,boardId,finalScore){
  debugger
    const URL = `http://localhost:3000/api/v1/users/` + userID
    return $.ajax({
      url:URL,
      type:"PATCH",
      data: JSON.stringify({board_id: boardId, final_score: finalScore}),
      contentType: "application/json; charset=utf-8",
      dataType: "json"
      })
}

export default postFinalScore
