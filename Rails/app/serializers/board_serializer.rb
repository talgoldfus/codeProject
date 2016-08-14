class BoardSerializer < ActiveModel::Serializer
  attributes :id, :topic
  has_many :players
  has_many :categories


end
