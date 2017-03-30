Rails.application.routes.draw do
  get 'static_pages_controller/root'

  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :show, :create, :destroy, :update]
  end
end
