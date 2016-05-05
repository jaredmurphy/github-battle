Rails.application.routes.draw do
    root :to => 'site#home'
    #get '/battle', to: 'battles#new'
    #post '/battle', to: 'battles#create'
    #get '/leaderboard', to: 'battles#leaderboard'
    resources :battles
    resources :users

    # selecting players for battle
    get '/battle', to: 'battles#select_player'
    get '/:player_one', to: 'battles#select_player'
    get '/:player_one/:player_two', to: 'battles#select_player'
    
end
