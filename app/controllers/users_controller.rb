class UsersController < ApplicationController

    def index
        @users = User.all
    end

    def new
        @user = User.new
        
        #checks if first player has already been selected
        if params[:player_one].nil?
            @player = "Player One"
        else
            @player = "Player Two"
        end
    end

    def create
        #wasnt able to grab url params for rendering on create method
        @user = User.new(user_params)
        @player_one = @user.username
        if @user.save 
            #redirect_to :action => :index 
            redirect_to "/battle/#{@player_one}"
        else 
            redirect_to :action => :new 
            #do something
        end
    end

    private
    
    def user_params
        params.require(:user).permit(
            :username, 
            :blog, 
            :github_url, 
            :location,
            :avatar_url
        )
    end

end
