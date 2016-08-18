class Question < ApplicationRecord
  belongs_to :category, optional: true
  has_many :options
  has_many :open_options



end
