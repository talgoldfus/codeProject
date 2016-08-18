const currentQuestionReducer = (state=[], action) => {
  switch (action.type) {
  case 'GET_CURRENT_QUESTION':
  let questionData = action.payload.data
    return {
      options: questionData.open_options[0] || questionData.options,
      content: questionData.content,
      difficulty: questionData.difficulty
    }
  default:
  return state
  }
}

export default currentQuestionReducer
