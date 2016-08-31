const analyticsReducer = (state={options: []}, action) => {


  switch (action.type) {
    case 'OPTION_ANALYTICS':
      let new_state = Object.assign({}, state, {options: [...state.options]})
      new_state.options.push(action.option)
      return new_state

    default:
      return state
  }

}


export default analyticsReducer
