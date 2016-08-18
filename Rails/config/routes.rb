Rails.application.routes.draw do
  mount Knock::Engine => '/knock'

  namespace :api do
    namespace :v1 do
      resources :users
      resources :players, except: [:new, :edit]
      resources :boards, except: [:new, :edit]
      resources :categories, except: [:new, :edit]
      resources :questions, except: [:new, :edit]
      resources :options, except: [:new, :edit]
    end
  end
end
