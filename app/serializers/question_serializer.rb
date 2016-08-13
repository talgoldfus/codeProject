class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :difficulty , :content
  belongs_to :category

end
