const categoriesReducer = (state=[] ,action) => {


  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        categories: action.payload.data
      }
    default:
      return state
  }

}





export default categoriesReducer
