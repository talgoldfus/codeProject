module Api
  module V1
    class GameOptionsController < ApplicationController

      def create
        user = User.find(params[:userId])
        game = Game.create(board_id: params[:board_id], user_id: user.id, final_score: params[:final_score])
        user.games.push(game)
        user.save
        
        params[:optionIds][:options].each do |param|
          GameOption.create(game_id: game.id, option_id: param)
        end
      end
      
    end
  end
end
