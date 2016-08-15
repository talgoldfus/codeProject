const boardReducer = (state = [], action) => {
      debugger;
  switch (action.type) {
    case 'GET_BOARD':
    return {
      board: action.board.data
        // name: board.topic,
        // id: board.id,
        // categories: board.categories
    }
    default:
    return state

  }
}

export default boardReducer
