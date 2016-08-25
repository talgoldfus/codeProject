module Api
  module V1
    class CategoriesController < ApplicationController

      def index
       render json: Category.returnCategories
      end

      def create
        category =Category.create(name: params[:submittedInfo][:CategoryName])
        render json: category
      end

    end
  end
end

# {"CategoryName":"Testing",
#    "multipleOptions":[],
#    "openOptions":[
#      {"correctAnswer":"\"INDEED\"", "oQuestionContent":"submitFinal ?", "language":"JS"}, {"correctAnswer":"\"yes\"", "oQuestionContent":"submitFinal2", "language":"RUBY"}, {"correctAnswer":"NO", "oQuestionContent":"Empty ?", "language":"JS"}, {"correctAnswer":"Hello", "oQuestionContent":"Hi", "language":"RUBY"}, {"correctAnswer":"Good Thank you", "oQuestionContent":"How are you", "language":"JS"}]
#      } permitted: false>
