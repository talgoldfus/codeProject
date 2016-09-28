module Api
  module V1
    class BoardsController < ApplicationController
      before_action :authenticate_request!, :except => [:index]

      def index
        render json: Board.returnTopics
      end

      def create
        if params[:seedBoardInfo]
            board =Board.create(topic: params[:seedBoardInfo][:boardName])
             params[:seedBoardInfo][:categories].each do |c_id|
               BoardCategory.create(board_id:board.id , category_id: c_id.to_i)
             end
         end
      end

      def show
        new_board = PopulateBoard.initiate(params[:id])
        new_board[:user] = current_user
        # new_board[:token] = http_token.to_json
        new_board[:token] = TokenGenerator.gen_token().to_json
        render json: new_board
      end

      def analytics
      end

    end
  end
end
