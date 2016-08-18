class Question < ApplicationRecord
  belongs_to :category, optional: true
  has_many :options
  has_many :open_options
  has_many :game_options, through: :options

  def percentage_correct
    GameOption.question_percentage_correct(self.id)
  end

end
