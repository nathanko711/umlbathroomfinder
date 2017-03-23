Rails.application.routes.draw do
  get '/bathroom', to: 'static_pages#bathroom'

  get '/floor', to: 'static_pages#floor'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#home'
end
