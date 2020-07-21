Rails.application.routes.draw do
  namespace :api do 
    namespace :v1 do 
      resources :users, only: [:show, :index] do 
        resources :emojis, only: [:create, :destroy]
      end
      resources :emojis, only: [:index]
      resources :sessions, only: [:create]
      resources :registrations, only: [:create]
      delete :logout, to: "sessions#logout"
      get :logged_in, to: "sessions#logged_in"
      
      root "static#home"
    end
  end

end
