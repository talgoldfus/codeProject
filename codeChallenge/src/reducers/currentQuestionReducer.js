const currentQuestionReducer = (state=[], action) => {
  switch (action.type) {
  case 'GET_CURRENT_QUESTION':
  let questionData = action.payload.data.data
    return {
      options: questionData
    }
  default:
  return state
  }
}

export default currentQuestionReducer
