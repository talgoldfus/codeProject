class UserAnalytics

def self.run(user)
    return {
      name: user.username, 
      tagline: user.tagline,
      id: user.id, 
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
      ques_values = game.questions_got_right.map{|object| object.values[1]}
      ques_values_wrong = game.questions_got_wrong.map{|object| object.values[1]}
      game_hash["questions_wrong"] = QuestionHashCreator.run(ques_values)
      game_hash["questions_right"] = QuestionHashCreator.run(ques_values_wrong) 
      hash[game.id] = game_hash
    end
  end

  def self.questions_right(user)
    QuestionHashCreator.run(user.questions_got_right)
  end

  def self.questions_wrong(user)
    QuestionHashCreator.run(user.questions_got_wrong)
  end

end