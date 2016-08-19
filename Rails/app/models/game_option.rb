class GameOption < ApplicationRecord
  belongs_to :game, optional: true
  belongs_to :option, optional: true
  belongs_to :question, optional: true

end
