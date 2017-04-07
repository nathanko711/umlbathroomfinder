Rails.application.routes.draw do
  resources :users
  resources :messages
  
  root 'static_pages#home'
  
  get '/signup', to: 'users#new'

  get '/bathroom', to: 'static_pages#bathroom'

  get '/floor', to: 'static_pages#floor'
  
  get '/chat', to: 'messages#index'
  
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  
  mount ActionCable.server, at: '/cable'
  
end
