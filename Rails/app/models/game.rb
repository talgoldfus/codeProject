class Game < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :board, optional: true
  has_many :game_options

end
