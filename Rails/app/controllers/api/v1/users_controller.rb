module Api
  module V1
    class UsersController < ApplicationController

 
      
      def update
        user = User.find(params[:id])
        game = Game.create(board_id: params[:board_id], user_id: user.id, final_score: params[:final_score])
        user.games.push(game)
        user.save
      end

      
    end
  end
end
