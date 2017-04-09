Rails.application.routes.draw do
  namespace :api do
    get 'user/create'
  end

  root "static_pages#root"
end
