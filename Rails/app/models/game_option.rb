class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true

  def self.number_of_questions_correct_per_game(game_id)
    number_of_options_selected = GameOption.where(game_id: game_id).length 
    number_of_correct_answers = GameOption.where(game_id: game_id).where(correct: true).length

    percentage_correct_answers = (number_of_correct_answers.to_f / number_of_options_selected.to_f) * 100
    percentage_correct_answers.round
  end
end
