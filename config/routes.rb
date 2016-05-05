Rails.application.routes.draw do
    root :to => 'site#home'
    #get '/battle', to: 'battles#new'
    #post '/battle', to: 'battles#create'
    #get '/leaderboard', to: 'battles#leaderboard'
    resources :battles
    resources :users
end
