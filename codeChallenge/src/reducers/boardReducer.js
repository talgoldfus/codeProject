const boardReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_BOARD':
    let gameData = action.payload.data.data
    let userData = action.payload.data.user
     return {
        name: gameData.topic,
        id: gameData.id,
        categories: gameData.categories,
        players: [{
          userId:   userData.id,
          name: userData.first_name +' ' + userData.last_name,
          score: 0
        }]
    }
    case 'REMOVE_LINK':
    state.categories.forEach((value, key, object)=>{
      const id = action.payload
        value[Object.keys(value)[0]].forEach((value, key, object)=>{
          if (value.id === id){
             value.active = !value.active
          }

        })
      })
      return state

    case 'CORRECT_ANSWER':
      let new_store = Object.assign({}, state, 
        {players: [...state.players]})
        
        new_store.players[0].score += action.points
        return new_store
          // ([...state.players][0].score += action.points)})        

    default:
     return state
  }
}

export default boardReducer
