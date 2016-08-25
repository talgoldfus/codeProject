module Api
  module V1
    class UsersController < ApplicationController
      # include Knock::Authenticable 
       before_action :authenticate_request!

      def create
        user = User.create(email: params[:email], password: params[:password])
      end

      def index
        render json: {'logged_in' => true}
      end

      def show 
        # byebug
        user = User.find(params[:id])
        render json: UserAnalytics.run(user)
      end

      def populate
        # byebug
        render json: UserAnalytics.run(current_user)
      end


      def analytics
        render json: User.leader_board
      end

      def delete_token
        current_user = nil
      end

      
    end
  end
end
