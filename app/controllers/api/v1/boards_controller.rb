module Api
  module V1
    class BoardsController < ApplicationController

      def index
        render json: Board.returnCategories
      end

    end
  end
end
