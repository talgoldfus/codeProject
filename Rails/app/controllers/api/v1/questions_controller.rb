module Api
  module V1
    class QuestionsController < ApplicationController

      def show
          questionObject = Question.find(params[:id])
          render json: questionObject
      end


      def create

        category = Category.find(params[:category_id])

        open_options = params[:open].map do |question|
          q = Question.create(content: question["oQuestionContent"] , category_id: category.id, difficulty: question["score"] )
          {question_id: q.id ,correct_answer: question["correctAnswer"], language: question["language"] , open:true }

        end

        multiple_options = params[:multiple].map do |question|
          q = Question.create(content: question["mQuestionContent"] , category_id: category.id, difficulty: question["score"] )
              question["option"].each_with_index.map do |option,index|
                  correct = question["correct"].to_i == index
                {question_id: q.id ,correct: correct , language: question["language"] , content: option["content"] }
              end
        end

        render json: {options: (multiple_options.flatten + open_options )}
      end

    end
  end
end
