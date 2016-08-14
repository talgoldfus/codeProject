export default function boardReducer(state = [], action)}{

  switch (action.type) {
    let board = action.board.data
    case 'GET_BOARD':
    return [...state,{
        name: board.topic,
        id: board.id,
        categories: board.categories
    }]
    default:
    return state

  }
}
