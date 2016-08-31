module Api
  module V1
    class AuthController < ApplicationController

      # in testing
      def authenticate
        user = User.find_by(email: params[:auth][:email])
        if user.authenticate(params[:auth][:password])
          render json: authentication_payload(user)
        else
          render json: { errors: ['Invalid username or password'] }, status: :unauthorized
        end
      end

      private

      def authentication_payload(user)
        return nil unless user && user.id
        {
          auth_token: AuthToken.encode({ user_id: user.id }),
          user: { id: user.id }
        }
      end
    
    end
  end
end