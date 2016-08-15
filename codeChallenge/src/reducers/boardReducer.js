const boardReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BOARD':
    let gameData = action.payload.data.data
     return {
        name: gameData.topic,
        id: gameData.id,
        categories: gameData.categories
    }
    default:
    return state

  }
}

export default boardReducer
