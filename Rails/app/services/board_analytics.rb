class BoardAnalytics
  def self.run(board)
    return {topic: board.topic, average_score: board.average_score, categories: self.questions(board)} 
  end 

  def self.questions(board)
    return board.categories.each_with_object({}) do |category, hash|
      category_hash = {}
      category_hash["name"] = category.name
      category_hash["questions"] = self.questions_for(category)
      hash[category.id] = category_hash
    end
  end

  def self.questions_for(category)
    self.question_hash_creator(category.questions)
  end


  def self.question_hash_creator(collection)
    return collection.each_with_object({}) do |question, hash|
      question_hash = {}
      question_hash["content"] = question.content
      question_hash["difficulty"] = question.difficulty
      question_hash["percentage_right"] = GameOption.question_percentage_correct(question.id)
      question_hash["topic"] = question.category.board.topic 
      question_hash["category"] = question.category.name 
      hash[question.id] = question_hash
    end
  end

end