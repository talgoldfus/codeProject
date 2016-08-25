module Api
  module V1
    class OptionsController < ApplicationController

      def asses
       userAnswer = AssesOpenOption.asses(params[:userAnswer], params[:correcAnswer])
       render json: userAnswer
      end

      def create
        byebug
        Option.create(option_params['options'])
        render json: Category.find(params[:options][0][:category_id])
      end

      private

      def option_params
        params.permit(
        options:[
          :open,
          :question_id ,
          :language,
          :correct,
          :correct_answer,
          :content]
        )
      end

    end
  end
end

[
  {:question_id=>37, :correct=>true, :language=>"RUBY", :content=>"OK"},
  {:question_id=>37, :correct=>false, :language=>"RUBY", :content=>"Bad"},
  {:question_id=>37, :correct=>false, :language=>"RUBY", :content=>"Soso"},
  {:question_id=>37, :correct=>false, :language=>"RUBY", :content=>"worse"},
  {:question_id=>38, :correct=>false, :language=>"JS", :content=>"8"},
  {:question_id=>38, :correct=>true, :language=>"JS", :content=>"6"},
  {:question_id=>38, :correct=>false, :language=>"JS", :content=>"null"},
  {:question_id=>38, :correct=>false, :language=>"JS", :content=>"undefiend"},
  {:question_id=>34, :correct_answer=>"36", :language=>"RUBY", :open=>true},
  {:question_id=>35, :correct_answer=>"16", :language=>"JS", :open=>true},
  {:question_id=>36, :correct_answer=>"12", :language=>"JS", :open=>true}]
