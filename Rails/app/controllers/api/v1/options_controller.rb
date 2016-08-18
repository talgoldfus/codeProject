module Api
  module V1
    class OptionsController < ApplicationController

      
      def index

        if params[:grab_options_for]
          questionObject = Question.find(params[:grab_options_for])
          collection = Option.where(question_id: params[:grab_options_for])
          render json: questionObject
        else
          render json: Option.all
        end
      end



    end
  end
end
