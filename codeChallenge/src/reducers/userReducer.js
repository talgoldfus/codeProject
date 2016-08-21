const userReducer = (state=[], action) => {


  switch (action.type) {
    case 'GET_USER':
      return {
        user_info: action.payload.data
      }
    case 'GET_CURRENT_USER':
      return {
        user_info: action.payload.data
      }
    default:
      return state
  }

}





export default userReducer
