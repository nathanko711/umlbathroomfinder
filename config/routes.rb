Rails.application.routes.draw do
  match "/404" => "errors#error404", via: [ :get, :post, :patch, :delete ]
  get 'sessions/new'

  get '/signup', to: 'users#new'

  # get '/bathroom', to: 'static_pages#bathroom'

  # get '/floor', to: 'static_pages#floor'
  
  resources :users
  resources :floors
  resources :bathrooms
  resources :reviews
  resources :navbar
  
  
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
end
