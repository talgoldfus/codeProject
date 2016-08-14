export default function boardReducer(state = [], action){

  switch (action.type) { 
    case 'GET_BOARD':
    let board = action.board.data
    return [...state,{
        name: board.topic,
        id: board.id,
        categories: board.categories
    }]
    default:
    return state

  }
}
