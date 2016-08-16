class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :difficulty , :content, :options ,:active

end
