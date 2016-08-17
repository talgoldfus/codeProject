class Option < ApplicationRecord
  belongs_to :question, optional: true
  has_many :game_options
end
