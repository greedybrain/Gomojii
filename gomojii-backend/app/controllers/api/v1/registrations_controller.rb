class Api::V1::RegistrationsController < ApplicationController
     def create
          user = User.create!(
               email: params[:email],
               username: params[:username],
               password: params[:password]
          )
          
          if user
               session[:user_id] = user.id 
               render json: {
                    status: :created,
                    user: UserSerializer.new(user).serializable_hash
               }
          else
               render json: {
                    status: 500
               }
          end
     end
end
