Rails.application.routes.draw do

    get 'signup', to: 'users#new', as: 'signup'
	get 'login', to: 'sessions#new', as: 'login'
	get 'logout', to: 'sessions#destroy', as: 'logout'
	post 'auth' => 'auth#authenticate'
	
	resources :users
	resources :sessions

  resources :events, only: [:index, :show, :create, :update, :destroy]
  root 'home#index'
end
