module Api
  module V1
    class SessionsController < ApplicationController

      def create
        if @user = User.find_by(first_name: params[:name])
          if @user.authenticate(params[:password])
              session[:user_id] = @user.id
              render json: current_user
          end
        end
      end

      def destroy
        session[:user_id] = nil
        redirect_to root_url
      end

    end
  end
end
