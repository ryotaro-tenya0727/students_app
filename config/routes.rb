Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  namespace :api do
    namespace :v1 do
      post '/signup', to: 'registrations#signup'
      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
      get '/logged_in', to: 'sessions#logged_in?'
      post '/index', to: 'sessions#index'
    end
  end
end
