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
            let userAssedAnswer = eval(userAnswer)() || "undefined"
             alert("Return value is " + userAssedAnswer )
             calculatedAnswer = ( correcAnswer  === (userAssedAnswer).toString() )
          } else{
             calculatedAnswer = ( correcAnswer  === (eval(userAnswer).toString()) )
          }
          props.updateAnalytics(props.id,calculatedAnswer, props.userId , null)
          props.evaluateAnswer(calculatedAnswer , props.difficulty)
          return;
      }
      alert(e)
      props.updateAnalytics(props.id, false, props.userId, e )
      props.evaluateAnswer(false , props.difficulty)
    })

  break;

  case 'RUBY':
    let URL = `http://localhost:3000/api/v1/assesOpenOption`
       $.ajax({
          url:URL,
          type:"POST",
          data: JSON.stringify({userAnswer , correcAnswer}),
          contentType: "application/json; charset=utf-8",
          dataType: "json"
        }).then((answer)=>{
          props.updateAnalytics(props.id, answer.correct, props.userId, answer.errorMessage )
          props.evaluateAnswer(answer.correct,props.difficulty)
          return;
        })

    default:
    null
  }


}
