Rails.application.routes.draw do
    get '/', to: 'site#home'
    get '/battle', to: 'battles#new'
    get '/leaderboard', to: 'battles#leaderboard'
end
