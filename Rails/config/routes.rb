Rails.application.routes.draw do

  resources :open_options

  mount Knock::Engine => '/knock'

  


  namespace :api do
    namespace :v1 do
      resources :users, except: [:new, :edit]
      resources :players, except: [:new, :edit]
      resources :boards, except: [:new, :edit]
      resources :categories, except: [:new, :edit]
      resources :questions, except: [:new, :edit]
      resources :options, except: [:new, :edit]

      resources :game_options, except: [:new, :edit]
      get "/sessions" => "sessions#create"
      post "/assesOpenOption" => "open_options#asses"

    end
  end
end
