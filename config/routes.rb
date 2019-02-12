Rails.application.routes.draw do

  devise_for :users
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
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
