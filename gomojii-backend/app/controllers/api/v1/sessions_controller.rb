class Api::V1::SessionsController < ApplicationController

     def create 
          user = User.find_by(email: params[:email])
          if user&.authenticate(params[:password])
               session[:user_id] = user.id 
               render json: {
                    status: :created,
                    logged_in: true,
                    user: UserSerializer.new(user).serializable_hash
               }
          else
               render json: {
                    status: 401
               }
          end
     end

     def logged_in 
          if @current_user 
               render json: {
                    logged_in: true,
                    user: UserSerializer.new(@current_user).serializable_hash
               }
          else 
               render json: {
                    logged_in: false
               }
          end
     end

     def logout
          session.clear
          render json: {
               status: 200,
               logged_out: true
          }
     end
end
