class ApplicationController < ActionController::API
  include ActionController::Serialization
  # helper_method :current_user
  # helper_method :logged_in?


  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user
  end

end
