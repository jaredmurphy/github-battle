Rails.application.routes.draw do
    root :to => 'site#index'
    #get '/battle', to: 'battles#new'
    #post '/battle', to: 'battles#create'
    #get '/leaderboard', to: 'battles#leaderboard'
    resources :battles
    resources :users

    # selecting players for battle
    get '/battle', to: 'users#select'
    get '/battle/:player_one', to: 'users#select'
    get '/battle/:player_one/:player_two', to: 'battles#new'
    
    namespace :api do
        namespace :v1 do 
            resources :users
        end
    end
end
