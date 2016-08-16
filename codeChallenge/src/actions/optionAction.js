export default function correctAnswer(answer, difficulty) {
  return {    
    type:'CORRECT_ANSWER',
    answer: answer,
    points: difficulty
  }
}

// export function wrongAnswer(answer) {
  // return {
    // type:'WRONG_ANSWER',
    // correct: answer
  // }
// }

