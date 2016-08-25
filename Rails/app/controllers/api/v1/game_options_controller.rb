module Api
  module V1
    class GameOptionsController < ApplicationController
      include Knock::Authenticable

      def create
        user = User.find(params[:boardInfo][:userId])
        game = Game.create(board_id: params[:boardInfo][:boardId].to_i, user_id: user.id, final_score: params[:boardInfo][:score])
        user.games.push(game)
        user.save
        params[:optionsInfo].each do |param|
          GameOption.create(game_id: game.id, option_id: param[:optionId], correct: param[:correct] , error: param[:error] )
        end
      end

      def user_analytics 
        user = User.find(params[:id])
        render json: UserAnalytics.run(user)
      end

      def board_analytics
        board = Board.find(params[:id])
        render json: BoardAnalytics.run(board)
      end
    end
  end
end
