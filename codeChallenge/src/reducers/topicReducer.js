const topicReducer = (state=[] ,action) => {


  switch (action.type) {
    case 'GET_TOPICS':
      return {
        topic: action.payload.data
      }
    default:
      return state
  }

}





export default topicReducer
