class OptionSerializer < ActiveModel::Serializer
  attributes :correct, :content , :question_id , :correct_answer, :open , :language
end
