class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true
  belongs_to :question, optional: true


  def self.question_percentage_correct(question_id)
    options_selected = Option.joins(:game_options).where(question_id: question_id)
    options_count = options_selected.length 
      if options_count == 0 
        return 'Not Yet Answered' 
      else 
        correct_answers = options_selected.where(correct: true)
        correct_answers_count = correct_answers.length 
        return correct_answers_count/options_count
      end 
  end 


end
