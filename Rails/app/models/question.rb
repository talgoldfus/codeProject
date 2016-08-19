class Question < ApplicationRecord
  belongs_to :category, optional: true
  has_many :options
  has_many :open_options
  has_many :game_options, through: :options
  has_many :games, through: :game_options

  def percentage_correct
    GameOption.question_percentage_correct(self.id)
  end

  def percentage_correct
    all_options = Option.joins(:game_options).where(question_id: self.id)
    all_options_count = all_options.length 
      if all_options_count == 0 
        return 'Not Yet Answered' 
      else 
        correct_answers = all_options.where(correct: true)
        correct_answers_count = correct_answers.length 
        return correct_answers_count.to_f/all_options_count.to_f
      end 
  end

end
