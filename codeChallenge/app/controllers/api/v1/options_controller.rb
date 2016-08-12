module Api
  module V1
    class OptionsController < ApplicationController

      def index
        render json: Option.all
      end

    end
  end
end