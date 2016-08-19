const userReducer = (state=[], action) => {


  switch (action.type) {
    case 'GET_USER':
      return {
        topic: action.payload.data
      }
    default:
      return state
  }

}





export default userReducer
