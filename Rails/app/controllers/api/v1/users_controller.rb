module Api
  module V1
    class UsersController < ApplicationController
      include Knock::Authenticable

      def create
        # on sign up
        user = User.create(email: params[:email], password: params[:password])
      end

      def show
        # user page with history
        user = User.find(params[:id])
        render json: UserAnalytics.run(user)
      end


      def populate
        # on sign in
        render json: UserAnalytics.run(current_user)
      end


      def analytics
        # when leaderboard is clicked
        render json: User.leader_board
      end


    end
  end
end
