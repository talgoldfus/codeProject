const userReducer = (state=[], action) => {


  switch (action.type) {
    case 'GET_USER':
      return {
        user_info: action.payload
      }
    case 'GET_LEADER_BOARD':
      return Object.assign({}, state, {leader_board: action.payload.data})
    default:
      return state
  }

}





export default userReducer
