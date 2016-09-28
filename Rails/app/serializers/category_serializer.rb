class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name ,:board_categories
  has_many :questions
  has_many :board_categories

end
