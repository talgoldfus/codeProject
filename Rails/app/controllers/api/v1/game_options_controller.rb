module Api
  module V1
    class GameOptionsController < ApplicationController
      include Knock::Authenticable

      def create
        #once the game is finished, it is added to the DB
        user = User.find(params[:boardInfo][:userId])
        game = Game.create(board_id: params[:boardInfo][:boardId].to_i, user_id: user.id, final_score: params[:boardInfo][:score])
        user.games.push(game)
        user.save
        params[:optionsInfo].each do |param|
          GameOption.create(game_id: game.id, option_id: param[:optionId], correct: param[:correct] , error: param[:error] )
        end
      end

      def user_analytics 
        # calls service object user analytics to show the history of that user       
        user = User.find(params[:id])
        render json: UserAnalytics.run(user)
      end

      def board_analytics
        # calls service object board analytics to show the history of that board
        board = Board.find(params[:id])
        render json: BoardAnalytics.run(board)
      end
    end
  end
end
