module Api
  module V1
    class OpenOptionsController < ApplicationController

          def asses
           userAnswer = AssesOpenOption.asses(params[:userAnswer], params[:correcAnswer])
           render json: userAnswer
          end

    end
  end
end
