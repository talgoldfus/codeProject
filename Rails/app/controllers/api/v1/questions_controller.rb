module Api
  module V1
    class QuestionsController < ApplicationController

      def show
          questionObject = Question.find(params[:id])
          render json: questionObject
      end

    end
  end
end
