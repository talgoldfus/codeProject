const requireFields = (...names) => data =>
  names.reduce((errors, name) => {
    if (!data[name]) {
      errors[name] = 'Required'
    }
    return errors
  }, {})

// const multipleOptions = requireFields('correct', 'language','mQuestionContent')
const validateOpenOptions = requireFields('correctAnswer', 'oQuestionContent','language')

const validateDeepForm = data => {
  const errors = {}
  if (!data.name) {
    errors.name = 'Required'
  }

  if (data.openOptions){
    debugger
  errors.openOptions = data.openOptions.map(validateOpenOptions)}
  return errors
}

export default validateDeepForm

//
//
// ['multipleOptions[].option[].content' ,'multipleOptions[].correct' ,'multipleOptions[].language','multipleOptions[].mQuestionContent'],
// ['openOptions[].correctAnswer','openOptions[].oQuestionContent', 'openOptions[].language']
