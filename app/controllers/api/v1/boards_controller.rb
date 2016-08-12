module Api
  module V1
    class BoardsController < ApplicationController

      def show
        new_board =PopulateBoard.initiate(params[:id])
        render json: new_board
      end

    end
  end
end
