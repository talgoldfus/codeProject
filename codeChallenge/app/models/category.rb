class Category < ApplicationRecord
  belongs_to :board
  has_many :questions

end
