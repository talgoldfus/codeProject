class BoardSerializer < ActiveModel::Serializer
  attributes :id, :topic
  # has_many :categories , :players <-- Breaks the app at http://localhost:3000/api/v1/boards for some reason

end
