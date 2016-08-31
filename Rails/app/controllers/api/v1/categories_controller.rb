module Api
  module V1
    class CategoriesController < ApplicationController

      def index
        # renders all the categories on the /game route after login
       render json: Category.returnCategories
      end

      def create
        # admin can create new category
        category = Category.create(name: params[:name])
        render json: category
      end

    end
  end
end
