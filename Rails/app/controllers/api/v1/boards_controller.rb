module Api
  module V1
    class BoardsController < ApplicationController

      def index
        render json: Board.returnCategories
      end


      def show
        new_board =PopulateBoard.initiate(params[:id])
        # new_board[:user] =  current_user
        new_board[:user] = User.first
        render json: new_board
      end

      def analytics 
      end 

    end
  end
end
