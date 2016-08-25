import $ from 'jquery'

  function seedBoardForm(seedBoardInfo){
    debugger
      return $.ajax({
        url:`http://localhost:3000/api/v1/boards/`,
        type:"POST",
        data: JSON.stringify({seedBoardInfo}),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      })
  }

export default seedBoardForm
