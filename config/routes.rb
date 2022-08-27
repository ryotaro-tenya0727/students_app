Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  namespace :api, format: 'json'  do
    namespace :v1 do
      resources :technologies do
        resources :comments
      end
      resources :notifications, only: :index
      resources :users
      resources :user_relationships
      get 'callback', to: 'github_oauth#callback'
      get '/logged_in', to: 'sessions#logged_in?'
      get '/show', to: 'sessions#show'
      post '/signup', to: 'registrations#signup'
      post '/login', to: 'sessions#login'
      delete '/logout', to: 'sessions#logout'
    end
  end

  get '*path', to: 'home#index'
end
