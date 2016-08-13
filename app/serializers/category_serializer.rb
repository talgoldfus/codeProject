class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :questions
  belongs_to :board

end
