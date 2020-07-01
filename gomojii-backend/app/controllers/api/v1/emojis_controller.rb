class Api::V1::EmojisController < ApplicationController

     def index
          emojis = Emoji.all 
          render json: EmojiSerializer.new(emojis).serialized_json
     end
     
     def create 
          if @current_user
               emoji = @current_user.emojis.build(emoji_params)
               if emoji.save
                    render json: {
                         emoji: EmojiSerializer.new(emoji).serializable_hash
                    }
               else
                    render json: {
                         message: "You already saved that emoji"
                    }
               end
          else 
               render json: {
                    status: 402
               }
          end
     end

     def destroy 
          if @current_user
               emoji = @current_user.emojis.find(params[:id])
               if emoji.destroy 
                    render json: {
                         message: "Emoji deleted"
                    }
               else
                    render json: {
                         message: "We couldn't delete that emoji"
                    }
               end
          else
               render json: {
                    message: "Please login"
               }
          end
     end

     private 

     def emoji_params
          params.permit(:slug, :character, :user_id)
     end

end
