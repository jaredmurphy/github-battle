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
        @player_data = {
            "player_one" => HTTParty.get("https://api.github.com/users/#{@player_one}"),
            "player_two" => HTTParty.get("https://api.github.com/users/#{@player_two}")
        }
        player_one = @player_data['player_one']
        player_two = @player_data['player_two']

        player_one_score = player_one['public_repos'] + player_one['followers'] 
        player_two_score = player_two['public_repos'] + player_two['followers'] 

        player_one['score'] = player_one_score 
        player_two['score'] = player_two_score 

        @winner = generate_winner(player_one, player_two)
        @battle = Battle.new
        binding.pry
    end

    def generate_winner(player_one, player_two)
        if player_one['score'] > player_two['score']
            player_one
        else
            player_two
        end
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
