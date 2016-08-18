class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true
  belongs_to :question, optional: true


  def self.question_percentage_correct(question_id)
    all_options = Option.joins(:game_options).where(question_id: question_id)
    all_options_count = all_options.length 
      if options_count == 0 
        return 'Not Yet Answered' 
      else 
        correct_answers = options_selected.where(correct: true)
        correct_answers_count = correct_answers.length 
        return correct_answers_count/all_options_count
      end 
  end 


  def self.board_percentage_correct(board_id)
    all_games = Game.joins(:game_options).where(board_id: board_id)
    all_games_count = all_games.length 
      if options_count == 0 
        return 'Not Yet Played' 
      else 
        correct_answers = all_games.where(correct: true)
        correct_answers_count = correct_answers.length 
        return correct_answers_count/all_games_count
      end 
  end

end
