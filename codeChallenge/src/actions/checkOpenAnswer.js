import $ from 'jquery'

export default function checkOpenAnswer(formInput,props){
  let language = props.language
  let correcAnswer = props.answer
  let userAnswer = formInput.content
  let calculatedAnswer;

  switch (language) {
    case 'JS':
      let errorTest = new Promise ((resolve)=>{
        try {
            typeof(eval(userAnswer))
          }
        catch (e) {
          resolve(e)
          }
        finally {
          resolve(false);
        }
      }
    )
    errorTest.then((e) => {
      if (!e){
        if (typeof(eval(userAnswer)) === "function"){
             calculatedAnswer = ( correcAnswer  === (eval(userAnswer)()).toString() )
          }else{
             calculatedAnswer = ( correcAnswer  === (eval(userAnswer).toString()) )
          }
          props.evaluateAnswer(calculatedAnswer , props.difficulty)
          return;
      }
      alert(e)
      props.evaluateAnswer(false , props.difficulty)
    })

  break;

  // case 'RUBY':
  //   let URL = `http://localhost:3000/api/v1/open_options/` + props.questionId
  //     return $.ajax({
  //         url:URL,
  //         type:"PATCH",
  //         data: JSON.stringify({userAnswer}),
  //         contentType: "application/json; charset=utf-8",
  //         dataType: "json"
  //       }).then((answer)=>{
  //         props.evaluateAnswer(answer,props.difficulty)
  //       })
  
    default:
    null
  }


}
