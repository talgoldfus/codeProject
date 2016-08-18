
class AssesOpenOption

  def self.asses(userAnswer,correcAnswer)
      begin
        eval userAnswer
      rescue ScriptError => e
        self.hash_response(false,false,e.message)
      rescue  => e
        self.hash_response(false,false,e.message)
      else
        userAssedAnswer = eval userAnswer
        self.hash_response(userAssedAnswer,correcAnswer,false)
      end
  end

  def self.hash_response(userAssedAnswer,correcAnswer,errorMessage)
    if !errorMessage
      correct =  userAssedAnswer.to_s == correcAnswer
      response = { correct: correct , errorMessage: false}
    else
      response = { correct: false , errorMessage: errorMessage}
    end
      return response
  end
end
