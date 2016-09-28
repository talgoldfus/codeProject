import $ from 'jquery'
import {browserHistory} from 'react-router';

  function seedBoardForm(seedBoardInfo){
      return $.ajax({
        url:`http://localhost:3000/api/v1/boards/`,
        type:"POST",
        data: JSON.stringify({seedBoardInfo}),
        contentType: "application/json; charset=utf-8",
        dataType: "json"
      }).then(()=>{
        alert("Board Added Successfully")
        browserHistory.push(`/admin`)
      })


  }

export default seedBoardForm
