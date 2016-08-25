class QuestionHashCreator 

def self.run(collection)
    return collection.each_with_object({}) do |question, hash|
      question_hash = {}
      question_hash["content"] = question.content
      question_hash["difficulty"] = question.difficulty
      question_hash["percentage_right"] = question.percentage_correct
      question_hash["topic"] = question.category.boards.first.topic
      question_hash["category"] = question.category.name
      hash[question.id] = question_hash
    end
  end

end
