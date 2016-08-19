class BoardAnalytics
  def self.run(board)
    return {topic: board.topic, 
      average_score: board.average_score, 
      categories: self.questions(board)} 
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
    QuestionHashCreator.run(category.questions)
  end

end