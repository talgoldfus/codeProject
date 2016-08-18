class Option < ApplicationRecord
  belongs_to :question, optional: true
  has_many :game_options
  has_many :games, through: :game_options 

end
