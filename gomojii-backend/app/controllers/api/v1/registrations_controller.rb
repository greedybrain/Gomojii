class Api::V1::RegistrationsController < ApplicationController
     def create
          user = User.create!(
               username: params[:username],
               email: params[:email],
               password: params[:password]
          )
          
          binding.pry
          
          if user
               session[:user_id] = user.id 
               render json: {
                    status: :created,
                    user: user
               }
          else
               render json: {
                    status: 500
               }
          end
     end
end
