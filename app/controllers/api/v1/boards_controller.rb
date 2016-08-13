module Api
  module V1
    class BoardsController < ApplicationController

      def index
        render json: Board.returnCategories
      end


      def show
        new_board =PopulateBoard.initiate(params[:id])

        render json:  new_board 
      end



    end
  end
end
