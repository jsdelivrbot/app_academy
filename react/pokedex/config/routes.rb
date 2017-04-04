Rails.application.routes.draw do
  get 'pokemon/index'

  get 'pokemon/show'

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :pokemon, except: [:new, :edit]
  end
end
