const currentQuestionReducer = (state=[], action) => {
  switch (action.type) {
  case 'GET_CURRENT_QUESTION':
      debugger;
  let questionData = action.payload.data.data.attributes
    return {
      options: questionData.options,
      content: questionData.content
    }
  default:
  return state
  }
}

export default currentQuestionReducer
