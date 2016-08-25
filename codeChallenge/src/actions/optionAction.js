export default function correctAnswer(answer, difficulty) {
  let points = difficulty

  if ( answer === true ) {
  } else {
      points = (difficulty*-1)
  }


  return {
    type:'ANSWER',
    points: points
  }
}
