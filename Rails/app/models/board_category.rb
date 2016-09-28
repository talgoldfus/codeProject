class BoardCategory < ApplicationRecord
  belongs_to :board, optional: true
  belongs_to :category, optional: true

end
