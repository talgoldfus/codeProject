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

end
