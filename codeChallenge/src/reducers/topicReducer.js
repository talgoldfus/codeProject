export default function topicReducer(state=[] ,action){
  switch (action.type) {
    case 'GET_TOPICS':
      return [
        ...state,
        {topic: action.topics}
      ]
      break;
    default:
    return state

  }

}
