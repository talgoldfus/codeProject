Rails.application.routes.draw do
  resources :open_options
  # mount Knock::Engine => '/knock'
  post 'auth_user' => 'authentication#authenticate_user'
  # get 'home' => 'home#index'
  namespace :api do
    namespace :v1 do
      resources :open_options
      resources :users, except: [:new, :edit]
      resources :players, except: [:new, :edit]
      resources :boards, except: [:new, :edit]
      resources :categories, except: [:new, :edit]
      resources :questions, except: [:new, :edit]
      resources :options, except: [:new, :edit]
      resources :game_options, except: [:new, :edit]
      get "/sessions" => "sessions#create"
      post "/assesOpenOption" => "options#asses"
      get "/game_options/user/:id" => "game_options#user_analytics"
      get "/game_options/board/:id" => "game_options#board_analytics"
      get "/analytics" => "users#analytics"
      get "/populate" => "users#populate"
      get "/delete_token" => "users#delete_token"

    end
  end
end
