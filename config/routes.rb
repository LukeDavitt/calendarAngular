Rails.application.routes.draw do

  resources :recipes, only: [:index, :show, :create, :update, :destroy]
  root 'home#index'
end
