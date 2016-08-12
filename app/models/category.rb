class Category < ApplicationRecord
  belongs_to :board, optional: true
  has_many :questions

end
