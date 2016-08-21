const openReducer = (state=[{typs: "Test"}] ,action) => {


  switch (action.type) {
    case 'GET_OPEN':
      return {
        topic: action.payload
      }
    default:
      return state
  }

}





export default openReducer
