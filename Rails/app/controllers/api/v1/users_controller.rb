module Api
  module V1
    class UsersController < ApplicationController
      include Knock::Authenticable

      def create
        user = User.create(email: params[:email], password: params[:password])
      end

      def show
        user = User.find(params[:id])
        render json: UserAnalytics.run(user)
      end

      def populate

        render json: UserAnalytics.run(current_user)
      end


      def analytics
        render json: User.leader_board
      end


    end
  end
end
