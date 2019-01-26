Rails.application.routes.draw do

  get 'items/index'
  get 'items/create'
  get 'items/destroy'
  get 'items/update'
  root to: 'home#index'
  namespace :api do 
    namespace :v1 do 
     resources :items, only: [:index, :create, :destroy, :update ]
    end 
  end 

end
