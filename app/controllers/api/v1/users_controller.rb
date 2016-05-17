class Api::V1::UsersController < Api::V1::BaseController

    def index
        respond_with User.all.order(created_at: :desc)
    end

    def create
        respond_with :api, :v1, User.create(user_params)
    end

    private

    def user_params
        params.require(:user).permit(:username, :location, :avatar_url)
    end
end
