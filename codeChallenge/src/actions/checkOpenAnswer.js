// import $ from 'jquery'

export default function checkOpenAnswer(formInput,props){
  let language = this.props.language || []
  let correcAnswer = this.props.correcAnswer || []

  const userAnswer = formInput.content
  const answerIs = ( correcAnswer  === eval(userAnswer)() )

  // if (language === "RUBY"){
  //   const URL = `http://localhost:3000/api/v1/options/`
  //   return $.ajax({
  //     url:URL,
  //     type:"POST",
  //     data: JSON.stringify({userAnswer}),
  //     contentType: "application/json; charset=utf-8",
  //     dataType: "json"
  //     })
  // }

  debugger

}
