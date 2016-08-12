module Api
  module V1
    class BoardsController < ApplicationController

      def index
        render json: Board.all
      end

    end
  end
end
