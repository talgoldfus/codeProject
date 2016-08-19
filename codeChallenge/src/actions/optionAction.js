export default function correctAnswer(answer, difficulty) {
  let points = difficulty

  if ( answer === true ) {
    // alert("CORRECT")
  } else {
    // alert("FALSE")
      points = (difficulty*-1)
  }


  return {
    type:'ANSWER',
    points: points
  }
}

// export function wrongAnswer(answer) {
  // return {
    // type:'WRONG_ANSWER',
    // correct: answer
  // }
// }
