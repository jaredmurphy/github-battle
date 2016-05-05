class BattlesController < ApplicationController
    def new
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
