class Option < ApplicationRecord
  belongs_to :question, optional: true
  has_many :game_options
  has_many :games, through: :game_options 

  def self.wrong_answers(user)
    # show by question
    Option.joins(:games).where('games.user_id': user.id).where(correct: false)
  end

  def self.right_answers(user)
    Option.joins(:games).where('games.user_id': user.id).where(correct: true)
  end

  def self.game_wrong_answers(game)
    # show by game type
    Option.joins(:games).where('games.id': game.id).where(correct: false)
  end

  def self.game_right_answers(game)
    Option.joins(:games).where('games.id': game.id).where(correct: true)
  end

end
