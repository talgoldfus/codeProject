class Question < ApplicationRecord
  belongs_to :category, optional: true
  has_many :options

end
