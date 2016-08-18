class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :difficulty , :content, :options ,:open_options ,:active

end
