class Game < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :board, optional: true
  has_many :game_options
  has_many :options, through: :game_options
  has_many :questions, through: :options

  def self.find_average_score(className, id)
    return Game.where(board_id: id).average('final_score').to_i if className == 'board' 
    Game.where(user_id: id).average('final_score').to_i if className == 'user' 
  end 

  def questions_got_wrong
    wrong_answers = Option.game_wrong_answers(self)
    wrong_answers.map{|option| {option: option, question: option.question}}  
  end

  def questions_got_right
    right_answers = Option.game_right_answers(self)
    right_answers.map{|option| {option: option, question: option.question}}
  end

end
