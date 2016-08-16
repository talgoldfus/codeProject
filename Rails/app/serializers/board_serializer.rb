class BoardSerializer < ActiveModel::Serializer
  attributes :id, :topic
  has_many :games
  has_many :categories


end
