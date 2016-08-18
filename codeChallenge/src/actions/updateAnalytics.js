export default function updateAnalytics(optionId, correct, userId, error) {
  return {    
    type:'OPTION_ANALYTICS',
    option: {optionId, correct, userId, error}, 
    userId: userId
  }
}
