class Option < ApplicationRecord
  belongs_to :question, optional: true
  has_many :game_options
  has_many :games, through: :game_options 

  def self.wrong_answers(user)
    Option.joins(:games).where('games.user_id': user.id).where(correct: false)
  end

  def self.right_answers(user)
    Option.joins(:games).where('games.user_id': user.id).where(correct: true)
  end

end
