class Api::V1::EmojisController < ApplicationController
     skip_before_action :set_current_user, only: [:create]

     def index
          emojis = Emoji.all 
          render json: EmojiSerializer.new(emojis).serialized_json
     end

     def usersEmojis 
          if params[:user_id]
               user = User.find(params[:user_id])
               return user.emojis.all
          end
     end

     def isDuplicate?(emoji)
          if usersEmojis() != nil 
               found_emoji = usersEmojis().find{|userEmoji| userEmoji.slug == emoji.slug}
               if found_emoji 
                    return true
               else 
                    return false
               end
          end
     end
     
     def create 
          if params[:user_id]
               user = User.find(params[:user_id])
               emoji = user.emojis.build(emoji_params)
               
               if !isDuplicate?(emoji)
                    emoji.save
                    render json: {
                         emoji: EmojiSerializer.new(emoji).serializable_hash
                    }
               else
                    render json: {
                         message: "You already saved that emoji"
                    }
               end
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
