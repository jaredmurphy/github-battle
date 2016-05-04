Rails.application.routes.draw do
    root :to => 'site#home'
    get '/battle', to: 'battles#new'
    get '/leaderboard', to: 'battles#leaderboard'
end
