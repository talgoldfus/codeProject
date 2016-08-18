class GameOption < ApplicationRecord
  belongs_to :games, optional: true
  belongs_to :options, optional: true

end
