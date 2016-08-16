const optionReducer = (state=[], action) => {

  switch (action.type) {
    case 'CORRECT_ANSWER':
      debugger
      return {
      option: action.payload.data
    }
    case 'WRONG_ANSWER':
      return {
      option: action.payload.data
    }
    default:
      return state
  }
}


export default optionReducer
