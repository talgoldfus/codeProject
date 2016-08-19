class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true
  belongs_to :question, optional: true


  def self.question_percentage_correct(question_id)
    all_options = Option.joins(:game_options).where(question_id: question_id)
    all_options_count = all_options.length 
      if all_options_count == 0 
        return 'Not Yet Answered' 
      else 
        correct_answers = all_options.where(correct: true)
        correct_answers_count = correct_answers.length 
        return correct_answers_count.to_f/all_options_count.to_f
      end 
  end 

  def self.board_percentage_correct(board_id)
    board_options_total = Game.joins(:options).where(board_id: board_id)
    board_options_count = board_options_total.length 
      if board_options_count == 0 
        return 'Not Yet Played' 
      else 
        correct_board_options = Game.joins(:options).where(board_id: board_id).where('options.correct': true)
        correct_board_options_count = correct_board_options.length 
        return correct_board_options_count.to_f/board_options_count.to_f
      end 
  end

  # def self.user_average_score(user_id)
  #   Game.where(user_id: user_id).average('final_score').to_i
  # end

  # def self.board_average_score 
  #   Game.where(board_id: board_id).average('final_score').to_i 
  # end 


  def self.user_analytics(user)
    return {average_score: user.average_score, 
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


  def self.topic_analytics(board)
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
    return category.questions.each_with_object({}) do |question, hash|
      question_hash = {}
      question_hash["content"] = question.content
      question_hash["difficulty"] = question.difficulty
      question_hash["percentage_right"] = self.question_percentage_correct(question.id)
      hash[question.id] = question_hash
    end
  end

  def self.question_hash_creator(collection)
    return collection.each_with_object({}) do |question, hash|
      question_hash = {}
      question_hash["content"] = question.content
      question_hash["difficulty"] = question.difficulty
      question_hash["percentage_right"] = self.question_percentage_correct(question.id)
      hash[question.id] = question_hash
    end
  end



end
