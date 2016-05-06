class BattlesController < ApplicationController

    def select_player        
        # checks to see if a first player has been selected
        if params[:player_one].nil?
            @player = "Player One"
        else 
            @player = "Player Two"
        end
    end


    def new
        @player_one = params[:player_one]
        @player_two = params[:player_two]
        @battle = Battle.new
    end

    def create
        @battle = Battle.new(params[:battle])
        if @battle.save
            redirect_to @battle
        else 
            #do something
        end
    end


end
