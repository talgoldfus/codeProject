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


end
