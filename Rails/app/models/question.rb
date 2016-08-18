class Question < ApplicationRecord
  belongs_to :category, optional: true
  has_many :options
  has_many :open_options
  has_many :game_options, through: :options


end
