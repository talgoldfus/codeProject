class BoardSerializer < ActiveModel::Serializer
  attributes :id, :topic
  has_many :categories
  has_many :players

end
