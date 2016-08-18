export default function updateAnalytics(option, userId) {
  return {    
    type:'OPTION_ANALYTICS',
    option: option, 
    userId: userId
  }
}