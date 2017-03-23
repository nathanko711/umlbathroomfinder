Rails.application.routes.draw do
  get '/signup', to: 'users#new'

  get '/bathroom', to: 'static_pages#bathroom'

  get '/floor', to: 'static_pages#floor'
  
  resources :users

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
end
