const analyticsReducer = (state={options: []}, action) => {


  switch (action.type) {
    case 'OPTION_ANALYTICS':
      // let current_user_id = action.user_id
      let new_state = Object.assign({}, state, {options: [...state.options]})
      new_state.options.push(action.option)
      return new_state

    default:
      return state
  }

}


export default analyticsReducer