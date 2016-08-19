class UserAnalytics

def self.run(user)
    return {
      name: user.username, 
      tagline: user.tagline,
      email: user.email, 
      average_score: user.average_score, 
      games: self.games(user), 
      questions_right: self.questions_right(user), 
      questions_wrong: self.questions_wrong(user)}
  end

  def self.games(user)
    games = Game.where(user_id: user.id)
    return games.each_with_object({}) do |game, hash|
      game_hash = {}
      game_hash["topic"] = game.board.topic
      game_hash["date"] = game.created_at
      game_hash["score"] = game.final_score
      hash[game.id] = game_hash
    end
  end

  def self.questions_right(user)
    self.question_hash_creator(user.questions_got_right)
  end

  def self.questions_wrong(user)
    self.question_hash_creator(user.questions_got_wrong)
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