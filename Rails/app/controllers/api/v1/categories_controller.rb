module Api
  module V1
    class CategoriesController < ApplicationController

      def index
       render json: Category.returnCategories
      end

      def create
        category =Category.create(name: params[:name])
        render json: category
      end

    end
  end
end
