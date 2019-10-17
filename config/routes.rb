Rails.application.routes.draw do
  # get 'accounts/index'
  # get 'accounts/create'
  # get 'accounts/update'
  # get 'accounts/destroy'
  namespace :v1, defaults: { format: 'json'} do
  end

  devise_for :users
  root 'pages#index'
  resources :accounts, defaults: { format: :json }
  get 'about', to: 'pages#about'
  get '*a', to: 'pages#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
