class BoardSerializer < ActiveModel::Serializer
  attributes :id, :topic
  has_many :categories , :players

end
