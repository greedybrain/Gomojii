class Api::V1::UsersController < ApplicationController

     def index 
          users = User.all
          render json: {
               users: UserSerializer.new(users).serializable_hash
          }
     end

     def show 
          user = User.find(params[:id])
          render json: {
               user: UserSerializer.new(user).serializable_hash
          }
     end

end
